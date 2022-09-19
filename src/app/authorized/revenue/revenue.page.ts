import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { format } from 'date-fns';
import { LeaveApiService } from 'src/app/services/apis/leave.api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.page.html',
  styleUrls: ['./revenue.page.scss'],
})
export class RevenuePage implements OnInit {
  attachment = null;
  attachmentFormat = '';
  transactionType = [{type:'Expense'},{type:'Sales'}];
  itemType = [{type:'Type 1'},{type:'Type 2'},{type:'Type 3'}];
  form = {
    transactionType: '',
    itemType:''
  };
  isEditing = false;

  // get typeSelected() {
  //   if (this.form.transaction) {
  //     return this.transaction.find((z) => z.type == this.form.transaction);
  //   }
  //   return null;
  // }

  get canApply() {
    return true;
  }

  get errorMessage() {
    if (
      !this.form.transactionType ||
      !this.form.itemType 
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
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    //API for type of items
    // this.leaveApiService.getSummaries().then((res) => {
    //   this.transaction = res.data;
    // });

    // this.leaveApiService
    //   .getOne(this.activatedRoute.snapshot.params.id)
    //   .then((res) => {
    //     this.form = {
    //       startDateString: new Date(res.data.fromDate),
    //       endDateString: new Date(res.data.toDate),
    //       transaction: res.data.type,
    //       reason: res.data.reason,
    //     };
    //     this.isEditing = true;
    //     this.attachment =
    //       environment.api_url + '/uploads/leaves/' + res.data.attachment;
    //   });
  }

  backClicked() {
    this.navCtrl.navigateBack('/members/home');
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

  async applyRevenue() {
    var form_data = new FormData();

    for (var key in this.form) {
      form_data.append(key, this.form[key]);
    }

    if (this.attachment) {
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
    }

    //API for submit revenie
    // this.leaveApiService.applyLeave(form_data).then(async (res) => {
    // });

    var toast = await this.toastController.create({
      message: 'Leave application has been submitted',
      duration: 4000,
    });
    toast.present();
    console.log('form data :: ', form_data);
    this.navCtrl.navigateBack('/members/home');
  }

  // async cancelLeave() {
  //   var alert = await this.alertController.create({
  //     message: 'Are you sure to cancel this leave?',
  //     header: 'Cancel Leave',
  //     buttons: [
  //       {
  //         text: 'Yes',
  //         handler: () => {
  //           this.leaveApiService
  //             .cancelLeave(this.activatedRoute.snapshot.params.id)
  //             .then(async (res) => {
  //               var toast = await this.toastController.create({
  //                 message: 'Leave application has been cancelled',
  //                 duration: 4000,
  //               });
  //               toast.present();
  //               this.navCtrl.navigateBack('/members/leave');
  //             });
  //         },
  //       },
  //       {
  //         text: 'No',
  //         handler: () => {},
  //       },
  //     ],
  //   });
  //   alert.present();
  // }
}
