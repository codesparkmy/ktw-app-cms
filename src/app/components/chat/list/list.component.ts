import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chat-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
@Input('messageList') messageList;
  constructor() { }

  ngOnInit() {
    console.log(this.messageList)
  }

}
