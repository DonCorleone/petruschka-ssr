import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
  @Input('href') href: string | undefined;

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    if (this.href && this.href.startsWith('#')) {
      event.preventDefault();
      const target = document.querySelector(this.href);
      if (target) {
        const yOffset = 51; // header height
        const y = (target as HTMLElement).getBoundingClientRect().top + window.pageYOffset - yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }
}
