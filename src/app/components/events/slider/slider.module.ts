import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SliderComponent } from './slider.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [SliderComponent, CardComponent],
})
export class EventSliderComponentModule {}
