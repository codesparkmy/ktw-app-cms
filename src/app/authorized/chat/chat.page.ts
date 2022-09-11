import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
messages:object[];
  constructor() { }

  ngOnInit() {
    this.messages = [
      {id:1,user:'Jonathon Alex',lastMessage:'Hello, do you remember when our meeting will be held?'},
      {id:2,user:'Adam Johnson',lastMessage:'Ahh, its you again'},
      {id:3,user:'Mikhail',lastMessage:'Meet me at 3pm'},
      {id:4,user:'Yusuf Islam',lastMessage:'When are you going to finish the task ?'},
      {id:5,user:'Dwayne Mike',lastMessage:'OK'},
    ]
  }

}
