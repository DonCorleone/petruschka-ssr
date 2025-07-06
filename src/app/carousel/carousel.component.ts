import { Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [NgTemplateOutlet],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  readonly slides = input<any[]>([]);
  activeIndex = 0;

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.slides().length) % this.slides().length;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.slides().length;
  }
}
