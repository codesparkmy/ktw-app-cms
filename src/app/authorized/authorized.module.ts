import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorizedPageRoutingModule } from './authorized-routing.module';

import { AuthorizedPage } from './authorized.page';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorizedPageRoutingModule,
  ],
  declarations: [AuthorizedPage],
})
export class AuthorizedPageModule {}
