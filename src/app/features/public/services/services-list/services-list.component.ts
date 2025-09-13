import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../../../../shared/models/service';
import { ApiService } from '../../../../core/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
  services: WorkshopService[] = [];   // ✅ Add this property

constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getServices().subscribe((data) => {
      this.services = data;   // ✅ now *ngFor will work
    });
  }

  // ✅ handle booking event
bookService(service: WorkshopService) {
  this.router.navigate(['/booking', service.id]);
}
}
