import { Directive, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
  readonly href = input<string>();

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const href = this.href();
    if (href && href.startsWith('#')) {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const yOffset = 51; // header height
        const y = (target as HTMLElement).getBoundingClientRect().top + window.pageYOffset - yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }
}
