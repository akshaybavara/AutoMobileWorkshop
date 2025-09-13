import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../../../shared/models/service';
import { ApiService } from '../../../core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  services: WorkshopService[] = [];
  currentIndex: number = 0;
  itemsPerPage: number = 3;
  
  constructor(private apiService: ApiService,private router: Router) {}

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
