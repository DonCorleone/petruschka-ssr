import { Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appHeaderScroll]'
})
export class HeaderScrollDirective {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private platformId = inject<Object>(PLATFORM_ID);

  @HostListener('window:scroll')
  @HostListener('window:resize')
  ngOnInit() {
    this.headerAnimation();
  }

  @HostListener('window:load')
  onLoad() {
    this.headerAnimation();
  }

  private headerAnimation() {
    if (!isPlatformBrowser(this.platformId)) return;
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      this.renderer.addClass(this.el.nativeElement, 'header-scrolled');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'header-scrolled');
    }
  }
}
