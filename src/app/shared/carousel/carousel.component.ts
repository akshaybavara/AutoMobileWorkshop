import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  ViewChild,
  OnDestroy,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  @Input() items: any[] = [];
  @Input() type: 'service' | 'review' | 'video' = 'service';
  @Input() cardWidth = 320;
  @Input() gap = 20;
  @Input() autoplay = true;
  @Input() autoplayInterval = 4000;

  @ViewChild('carouselList') carouselList!: ElementRef<HTMLDivElement>;

  private autoplayTimer: any;
  activeIndex = 0;
  isPaused = false;

  // swipe vars
  private touchStartX = 0;
  private touchEndX = 0;
  private minSwipeDistance = 50; // pixels to trigger swipe

  ngAfterViewInit() {
    if (this.autoplay) {
      this.startAutoplay();

      const list = this.carouselList.nativeElement;
      list.addEventListener('mouseenter', () => this.pauseAutoplay());
      list.addEventListener('mouseleave', () => this.resumeAutoplay());
      list.addEventListener('touchstart', (e) => this.handleTouchStart(e));
      list.addEventListener('touchend', (e) => this.handleTouchEnd(e));
    }
  }

  ngOnDestroy() {
    this.clearAutoplay();
  }

  scrollNext() {
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
    this.scrollToActive();
    this.restartAutoplay();
  }

  scrollPrev() {
    this.activeIndex =
      (this.activeIndex - 1 + this.items.length) % this.items.length;
    this.scrollToActive();
    this.restartAutoplay();
  }

  goToSlide(index: number) {
    this.activeIndex = index;
    this.scrollToActive();
    this.restartAutoplay();
  }

  private scrollToActive() {
    if (this.carouselList) {
      this.carouselList.nativeElement.scrollTo({
        left: this.activeIndex * (this.cardWidth + this.gap),
        behavior: 'smooth'
      });
      this.resetDotAnimation();
    }
  }

  private startAutoplay() {
    this.autoplayTimer = setInterval(() => {
      if (!this.isPaused) {
        this.scrollNext();
      }
    }, this.autoplayInterval);
    this.resetDotAnimation();
  }

  private restartAutoplay() {
    this.clearAutoplay();
    this.startAutoplay();
  }

  private pauseAutoplay() {
    this.isPaused = true;
    this.pauseDotAnimation();
  }

  private resumeAutoplay() {
    this.isPaused = false;
    this.resumeDotAnimation();
  }

  private clearAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
  }

  private resetDotAnimation() {
    const dots = document.querySelectorAll('.dot-progress');
    dots.forEach((dot, i) => {
      dot.classList.remove('animate', 'paused');
      void (dot as HTMLElement).offsetWidth;
      if (i === this.activeIndex) {
        dot.classList.add('animate');
      }
    });
  }

  private pauseDotAnimation() {
    const activeDot = document.querySelectorAll('.dot-progress')[this.activeIndex];
    if (activeDot) {
      activeDot.classList.add('paused');
    }
  }

  private resumeDotAnimation() {
    const activeDot = document.querySelectorAll('.dot-progress')[this.activeIndex];
    if (activeDot) {
      activeDot.classList.remove('paused');
    }
  }

  // ==================
  // Swipe Gesture Logic
  // ==================
  private handleTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].screenX;
  }

  private handleTouchEnd(e: TouchEvent) {
    this.touchEndX = e.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const distance = this.touchEndX - this.touchStartX;
    if (Math.abs(distance) > this.minSwipeDistance) {
      if (distance > 0) {
        this.scrollPrev(); // swipe right → prev
      } else {
        this.scrollNext(); // swipe left → next
      }
    }
  }
  loadVideo(video: any) {
  video.loaded = true;
}

}
