import { Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [NgTemplateOutlet],
  template: `
    <div class="carousel">
      <div class="carousel-inner">
        @for (slide of slides(); track slide; let i = $index) {
          <div class="carousel-item" [class.active]="i === activeIndex">
            <ng-container *ngTemplateOutlet="slide"></ng-container>
          </div>
        }
      </div>
      <button class="carousel-control-prev" (click)="prev()" aria-label="Previous">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" (click)="next()" aria-label="Next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
    `,
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
