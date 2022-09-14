import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chat-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
@Input('user') user;

  constructor() { }

  ngOnInit() {
  }

}
