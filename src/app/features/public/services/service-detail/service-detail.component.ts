import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkshopService } from '../../../../shared/models/service';
import { ApiService } from '../../../../core/api.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service!: WorkshopService | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.apiService.getServices().subscribe((data) => {
        this.service = data.find((s) => s.slug === slug);
      });
    }
  }
}
