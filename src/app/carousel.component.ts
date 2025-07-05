import { Component, Input } from '@angular/core';
import { NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgFor, NgTemplateOutlet],
  template: `
    <div class="carousel">
      <div class="carousel-inner">
        <ng-container *ngFor="let slide of slides; let i = index">
          <div class="carousel-item" [class.active]="i === activeIndex">
            <ng-container *ngTemplateOutlet="slide"></ng-container>
          </div>
        </ng-container>
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
  @Input() slides: any[] = [];
  activeIndex = 0;

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.slides.length) % this.slides.length;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length;
  }
}
