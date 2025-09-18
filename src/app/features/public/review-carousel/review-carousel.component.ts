import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-carousel',
  templateUrl: './review-carousel.component.html',
  styleUrls: ['./review-carousel.component.css']
})
export class ReviewCarouselComponent {
  @Input() reviews: any[] = []; // Expects Google reviews JSON

  currentIndex = 0;
  itemsPerPage = 3;

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

  get visibleReviews() {
    return this.reviews.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  nextReview() {
    if (this.currentIndex + this.itemsPerPage < this.reviews.length) {
      this.currentIndex++;
    }
  }

  prevReview() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  getStars(rating: number) {
    return Array(rating).fill(0);
  }
}
