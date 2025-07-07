import {
  Component,
  input,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
// import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [NgTemplateOutlet],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  // animations: []
})
export class CarouselComponent implements OnInit, OnDestroy {
  readonly slides = input<any[]>([]);
  activeIndex = 0;
  private autoSlideInterval: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.next(false);
      this.cdr.markForCheck();
    }, 4000); // 4 seconds
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  prev(isManual = true) {
    this.activeIndex =
      (this.activeIndex - 1 + this.slides().length) % this.slides().length;
    this.cdr.markForCheck();
    if (isManual) this.stopAutoSlide();
  }

  next(isManual = true) {
    this.activeIndex = (this.activeIndex + 1) % this.slides().length;
    this.cdr.markForCheck();
    if (isManual) this.stopAutoSlide();
  }
}
