import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { UpdatesSectionComponent } from '../updates/updates-section.component';

@Component({
  selector: 'app-promo-section',
  standalone: true,
  templateUrl: './promo-section.component.html',
  styleUrl: './promo-section.component.css',
  imports: [CarouselComponent, UpdatesSectionComponent]
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