import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'leave-request-modal',
  templateUrl: './leave-request-modal.component.html',
  styleUrls: ['./leave-request-modal.component.scss'],
})
export class LeaveRequestModalComponent implements OnInit {
  @Output() onCloseModal = new EventEmitter();
  constructor() {}

  ngOnInit() {
  }
}
