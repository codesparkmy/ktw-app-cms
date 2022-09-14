import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { Camera, CameraResultType } from '@capacitor/camera';
import { LeaveApiService } from 'src/app/services/apis/leave.api.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.page.html',
  styleUrls: ['./apply-leave.page.scss'],
})
export class ApplyLeavePage implements OnInit {
  options: object[];
  dateValue = format(new Date(), 'd MMM yyyy');
  attachment = null;
  attachmentFormat = '';
  leaveTypes = [];
  usedDays = null;
  form = {
    leaveType: '',
    startDateString: null,
    endDateString: null,
    reason: '',
  };

  get typeSelected() {
    if (this.form.leaveType) {
      return this.leaveTypes.find((z) => z.type == this.form.leaveType);
    }
    return null;
  }

  get canApply() {
    if (this.form.leaveType && this.usedDays) {
      return this.typeSelected.days - this.usedDays > 0;
    }
    return false;
  }

  get errorMessage() {
    if (
      !this.form.leaveType ||
      !this.form.startDateString ||
      !this.form.endDateString ||
      !this.form.reason
    ) {
      return 'Please fill in all the fields in the form';
    }

    if (!this.canApply) {
      return 'You do not have enough leave days available to apply';
    }
    return '';
  }

  constructor(
    private navCtrl: NavController,
    private leaveApiService: LeaveApiService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.leaveApiService.getSummaries().then((res) => {
      this.leaveTypes = res.data;
    });
  }

  backClicked() {
    this.navCtrl.navigateBack('/members/leave');
  }

  endDateChanged(value) {
    this.form.endDateString = new Date(value);
    this.checkDays();
  }

  startDateChanged(value) {
    this.form.startDateString = new Date(value);
    this.checkDays();
  }

  checkDays() {
    if (this.form.endDateString && this.form.startDateString) {
      this.leaveApiService.checkBody(this.form).then((res) => {
        this.usedDays = res.data;
      });
    }
  }

  openGallery() {
    Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
    }).then((res) => {
      this.attachment = res.dataUrl;
      this.attachmentFormat = res.format;
    });
  }

  applyLeave() {
    var form_data = new FormData();

    for (var key in this.form) {
      form_data.append(key, this.form[key]);
    }

    const rawData = atob(
      this.attachment.replace('data:', '').replace(/^.+,/, '')
    );

    const bytes = new Array(rawData.length);
    for (let x = 0; x < rawData.length; x++) {
      bytes[x] = rawData.charCodeAt(x);
    }
    const arr = new Uint8Array(bytes);

    const blob = new Blob([arr], { type: 'image/' + this.attachmentFormat });

    form_data.append('leaves', blob, 'image.' + this.attachmentFormat);
    this.leaveApiService.applyLeave(form_data).then(async (res) => {
      var toast = await this.toastController.create({
        message: 'Leave application has been submitted',
        duration: 4000,
      });
      toast.present();
      this.navCtrl.navigateBack('/members/leave');
    });
  }
}
