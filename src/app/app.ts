import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderScrollDirective } from './header-scroll.directive';
import { SmoothScrollDirective } from './smooth-scroll.directive';
import { CountdownTimerComponent } from './countdown-timer.component';
import { CarouselComponent } from './carousel.component';
import { ModalComponent } from './modal.component';
import {ViewportObserverDirective} from './viewport-observer.directive';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderScrollDirective,
    SmoothScrollDirective,
    CountdownTimerComponent,
    CarouselComponent,
    ModalComponent,
    ViewportObserverDirective
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
