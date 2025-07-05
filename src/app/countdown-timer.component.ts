import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  template: `
    <span class="countdown-box">
      <span class="days">{{ days }}d </span>
      <span class="hours">{{ hours }}h </span>
      <span class="minutes">{{ minutes }}m </span>
      <span class="secs">{{ seconds }}s</span>
    </span>
  `
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() targetDate: string = '';
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private intervalId: any;

  ngOnInit() {
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCountdown() {
    const target = new Date(this.targetDate).getTime();
    const now = new Date().getTime();
    let secondsLeft = Math.max(0, Math.floor((target - now) / 1000));
    this.days = Math.floor(secondsLeft / (3600 * 24));
    secondsLeft -= this.days * 3600 * 24;
    this.hours = Math.floor(secondsLeft / 3600);
    secondsLeft -= this.hours * 3600;
    this.minutes = Math.floor(secondsLeft / 60);
    this.seconds = secondsLeft - this.minutes * 60;
  }
}
