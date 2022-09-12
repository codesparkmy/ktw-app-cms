import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPageRoutingModule } from './edit-routing.module';

import { EditPage } from './edit.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { PopupSelectComponentModule } from 'src/app/components/popup-select/popup-select.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPageRoutingModule,
    PopupSelectComponentModule
  ],
  declarations: [EditPage,HeaderComponent]
})
export class EditPageModule {}
