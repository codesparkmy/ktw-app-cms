import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CalendarPickerComponent } from 'src/app/components/calendar-picker/calendar-picker.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CalendarPageRoutingModule],
  declarations: [CalendarPage, HeaderComponent, CalendarPickerComponent],
})
export class CalendarPageModule {}
