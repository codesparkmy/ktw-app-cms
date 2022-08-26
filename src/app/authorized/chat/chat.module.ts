import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ChatListComponentModule } from 'src/app/components/chat/list/list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    ChatListComponentModule
  ],
  declarations: [ChatPage, HeaderComponent]
})
export class ChatPageModule {}
