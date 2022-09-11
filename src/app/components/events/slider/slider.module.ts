import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SliderComponent } from './slider.component';
import { CardComponent } from '../card/card.component';
import { MinuteToTimePipe } from 'src/app/pipes/minute-to-time.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [SliderComponent, CardComponent, MinuteToTimePipe],
  exports: [SliderComponent, CardComponent],
})
export class EventSliderComponentModule {}
