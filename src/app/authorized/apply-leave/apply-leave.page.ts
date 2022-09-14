import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { Camera, CameraResultType } from '@capacitor/camera';
import { LeaveApiService } from 'src/app/services/apis/leave.api.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

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
  isEditing = false;

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
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.leaveApiService.getSummaries().then((res) => {
      this.leaveTypes = res.data;
    });

    this.leaveApiService
      .getOne(this.activatedRoute.snapshot.params.id)
      .then((res) => {
        this.form = {
          startDateString: new Date(res.data.fromDate),
          endDateString: new Date(res.data.toDate),
          leaveType: res.data.type,
          reason: res.data.reason,
        };
        this.isEditing = true;
        this.attachment =
          environment.api_url + '/uploads/leaves/' + res.data.attachment;
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
    if (!this.isEditing)
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

  async cancelLeave() {
    var alert = await this.alertController.create({
      message: 'Are you sure to cancel this leave?',
      header: 'Cancel Leave',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.leaveApiService
              .cancelLeave(this.activatedRoute.snapshot.params.id)
              .then(async (res) => {
                var toast = await this.toastController.create({
                  message: 'Leave application has been cancelled',
                  duration: 4000,
                });
                toast.present();
                this.navCtrl.navigateBack('/members/leave');
              });
          },
        },
        {
          text: 'No',
          handler: () => {},
        },
      ],
    });
    alert.present();
  }
}
