import { Component, Output, EventEmitter } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-updates-section',
  standalone: true,
  templateUrl: './updates-section.component.html',
  styleUrl: './updates-section.component.css',
  imports: [CarouselComponent, CountdownTimerComponent]
})
export class UpdatesSectionComponent {
  @Output() videoModalOpen = new EventEmitter<void>();
  @Output() infoModalOpen = new EventEmitter<void>();

  openVideoModal() {
    this.videoModalOpen.emit();
  }
  openInfoModal() {
    this.infoModalOpen.emit();
  }
}
