import { Component } from '@angular/core';
import { PromoSectionComponent } from './promo/promo-section.component';
import { GigsSectionComponent } from './gigs/gigs-section.component';
import { MusicSectionComponent } from './music/music-section.component';
import { AboutSectionComponent } from './about/about-section.component';
import { MerchSectionComponent } from './merch/merch-section.component';
import { ContactSectionComponent } from './contact/contact-section.component';
import { HeaderScrollDirective } from './scroll/header-scroll.directive';
import { SmoothScrollDirective } from './scroll/smooth-scroll.directive';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [
  
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
