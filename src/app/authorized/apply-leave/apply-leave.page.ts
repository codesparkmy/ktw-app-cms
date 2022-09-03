import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.page.html',
  styleUrls: ['./apply-leave.page.scss'],
})
export class ApplyLeavePage implements OnInit {
  dateValue = format(new Date(), 'd MMM yyyy');
  endDateString = '';
  startDateString = '';
  constructor(private navCtrl: NavController) {
    this.endDate();
    this.startDate();
  }

  ngOnInit() {}

  endDate(){
    this.endDateString = format(new Date(),'d MMM yyyy')
  }

  startDate(){
    this.startDateString = format(new Date(),'d MMM yyyy')
  }


  backClicked() {
    this.navCtrl.back();
  }

  endDateChanged(value){
    this.endDateString = format(parseISO(value), 'd MMM yyyy')
  }

  startDateChanged(value){
    this.startDateString = format(parseISO(value), 'd MMM yyyy')
  }
}
