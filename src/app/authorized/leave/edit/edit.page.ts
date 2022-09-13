import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  @ViewChild("reason") reason;
  request: object[];
  options: object[];
  startDateString = null;
  endDateString = null;
  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.request = JSON.parse(params['data']);
      console.log(this.request);
    });

    this.startDateString = format(
      new Date(this.request['dateStart']),
      'd MMM yyyy'
    );

    this.endDateString = format(new Date(this.request['dateEnd']), 'd MMM yyyy');

    this.options = [
      { title: 'Annual', Value: 'Annual' },
      { title: 'Medical', Value: 'Medical' },
      { title: 'Emergency', Value: 'Emergency' },
    ];
  }

  endDateChanged(value) {
    console.log(value);
    this.endDateString = format(parseISO(value), 'd MMM yyyy');
  }

  startDateChanged(value) {
    this.startDateString = format(parseISO(value), 'd MMM yyyy');
  }

  backClicked() {
    this.navCtrl.navigateBack('/members/leave');
  }

  applyChanges(){
    this.request["reason"] = this.reason.value;
    this.request["dateStart"] = this.startDateString;
    this.request["dateEnd"] = this.endDateString;
    console.log(this.request)
  }
}
