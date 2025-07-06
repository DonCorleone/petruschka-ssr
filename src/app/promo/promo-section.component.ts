import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-promo-section',
  standalone: true,
  templateUrl: './promo-section.component.html',
  styleUrl: './promo-section.component.css',
  imports: [CarouselComponent, CountdownTimerComponent]
})
export class PromoSectionComponent {
  @Input() videoModalOpen = false;
  @Output() videoModalOpenChange = new EventEmitter<boolean>();
  @Input() infoModalOpen = false;
  @Output() infoModalOpenChange = new EventEmitter<boolean>();

  openVideoModal() {
    this.videoModalOpenChange.emit(true);
  }
  openInfoModal() {
    this.infoModalOpenChange.emit(true);
  }
}