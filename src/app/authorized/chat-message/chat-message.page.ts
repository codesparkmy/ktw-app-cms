import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.page.html',
  styleUrls: ['./chat-message.page.scss'],
})
export class ChatMessagePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  send(){
    console.log("SEND!")
  }
}
