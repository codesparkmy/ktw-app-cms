import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.page.html',
  styleUrls: ['./apply-leave.page.scss'],
})
export class ApplyLeavePage implements OnInit {
  picture:string;
  options:object[];
  dateValue = format(new Date(), 'd MMM yyyy');
  endDateString = '';
  startDateString = '';
  constructor(private navCtrl: NavController) {
    this.endDate();
    this.startDate();
  }

  ngOnInit() {
    this.options = [
      {title:"Annual",Value:"Annual"},
      {title:"Medical",Value:"Medical"},
      {title:"Emergency",Value:"Emergency"}
    ]
  }

  endDate() {
    this.endDateString = format(new Date(), 'd MMM yyyy');
  }

  startDate() {
    this.startDateString = format(new Date(), 'd MMM yyyy');
  }

  backClicked() {
    this.navCtrl.navigateBack('/members/leave');
  }

  endDateChanged(value) {
    console.log(value);
    this.endDateString = format(parseISO(value), 'd MMM yyyy');
  }

  startDateChanged(value) {
    this.startDateString = format(parseISO(value), 'd MMM yyyy');
  }

  async openGallery() {
    console.log('open gallery');
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
    });

    this.picture = image.dataUrl;
  }
}
