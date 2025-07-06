import { Component } from '@angular/core';
import { PromoSectionComponent } from './sections/promo-section.component';
import { GigsSectionComponent } from './sections/gigs-section.component';
import { MusicSectionComponent } from './sections/music-section.component';
import { AboutSectionComponent } from './sections/about-section.component';
import { MerchSectionComponent } from './sections/merch-section.component';
import { ContactSectionComponent } from './sections/contact-section.component';
import { RouterOutlet } from '@angular/router';
import { HeaderScrollDirective } from './scroll/header-scroll.directive';
import { SmoothScrollDirective } from './scroll/smooth-scroll.directive';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderScrollDirective,
    SmoothScrollDirective,
    ModalComponent,
    PromoSectionComponent,
    GigsSectionComponent,
    MusicSectionComponent,
    AboutSectionComponent,
    MerchSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'petruschka-ssr';
  videoModalOpen = false;
  infoModalOpen = false;
  navbarOpen = false;

}
