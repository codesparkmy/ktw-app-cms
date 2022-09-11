import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.page.html',
  styleUrls: ['./chat-message.page.scss'],
})
export class ChatMessagePage implements OnInit {
  user: string;
  constructor(private route: ActivatedRoute, private navCtrl: NavController) {}

  ngOnInit() {
    console.log(this.route.snapshot);
    this.user = this.route.snapshot.params.id;
  }

  send() {}

  backClicked() {
    this.navCtrl.back()
  }
}
