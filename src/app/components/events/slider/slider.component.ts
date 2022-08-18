import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 500,
    slidesPerView: 1.07,
    spaceBetween: 0,
    centeredSlides: true,
  };

  constructor() {}

  ngOnInit() {}
}
