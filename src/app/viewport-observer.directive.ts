import { Directive, ElementRef, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appViewportObserver]',
  standalone: true
})
export class ViewportObserverDirective implements OnInit, OnDestroy {
  @Output() appViewportObserver = new EventEmitter<boolean>();
  @Input() threshold: number | number[] = 0.1;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            this.zone.run(() => {
              this.appViewportObserver.emit(entry.isIntersecting);
            });
          });
        },
        { threshold: this.threshold }
      );
      this.observer.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
