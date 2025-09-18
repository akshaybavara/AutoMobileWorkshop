import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-carousel',
  templateUrl: './video-carousel.component.html',
  styleUrls: ['./video-carousel.component.css']
})
export class VideoCarouselComponent {
  @Input() videos: string[] = []; // List of YouTube video IDs

  currentIndex = 0;
  itemsPerPage = 3; // desktop default

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.updateItemsPerPage();
    window.addEventListener('resize', () => this.updateItemsPerPage());
  }

  updateItemsPerPage() {
    if (window.innerWidth < 600) {
      this.itemsPerPage = 1;
    } else {
      this.itemsPerPage = 3;
    }
  }

  get visibleVideos() {
    return this.videos.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  nextVideo() {
    if (this.currentIndex + this.itemsPerPage < this.videos.length) {
      this.currentIndex++;
    }
  }

  prevVideo() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  getSafeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }
}
