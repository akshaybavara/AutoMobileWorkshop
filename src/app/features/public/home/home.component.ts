import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../../../shared/models/service';
import { ApiService } from '../../../core/api.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: { id: string, url: SafeResourceUrl }[] = [];
  services: WorkshopService[] = [];
  currentIndex: number = 0;
  itemsPerPage: number = 3;
  googleReviews = [
    {
      author_name: "Rahul Sharma",
      rating: 5,
      text: "Excellent service! My car looks brand new after the paint job.",
      relative_time_description: "2 weeks ago",
      profile_photo_url: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      author_name: "Priya Patel",
      rating: 4,
      text: "Good experience, staff was helpful and polite.",
      relative_time_description: "1 month ago",
      profile_photo_url: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      author_name: "Amit Kumar",
      rating: 5,
      text: "Quick denting repair, very professional team. Highly recommend!",
      relative_time_description: "3 months ago",
      profile_photo_url: "https://randomuser.me/api/portraits/men/54.jpg"
    }
  ];


  constructor(private apiService: ApiService, private router: Router, private sanitizer: DomSanitizer) {
    const videoIds = ['6jqXsYpMOyk', '6jqXsYpMOyk', 'xzHEgDvmAss'];  // replace with your IDs
    this.videos = videoIds.map(id => ({
      id,
      url: this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`
      )
    }));

  }

  bookService(service: WorkshopService) {
    this.router.navigate(['/booking', service.id]);
  }
  ngOnInit(): void {
    this.apiService.getServices().subscribe({
      next: (data) => (this.services = data),
      error: (err) => console.error('Error loading services:', err)
    });
  }
  get visibleServices(): WorkshopService[] {
    return this.services.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerPage
    );
  }
  nextService() {
    if (this.currentIndex + this.itemsPerPage < this.services.length) {
      this.currentIndex++;
    }
  }
  prevService() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
