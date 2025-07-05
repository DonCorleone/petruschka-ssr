import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderScrollDirective } from './scroll/header-scroll.directive';
import { SmoothScrollDirective } from './scroll/smooth-scroll.directive';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderScrollDirective,
    SmoothScrollDirective,
    CountdownTimerComponent,
    CarouselComponent,
    ModalComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'petruschka-ssr';
  videoModalOpen = false;
  infoModalOpen = false;
  navbarOpen = false;
  aboutVisible = false;
  merchVisible = false;
  contactVisible = false;
}
