import { Directive, ElementRef, HostListener, Renderer2, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appHeaderScroll]'
})
export class HeaderScrollDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

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
