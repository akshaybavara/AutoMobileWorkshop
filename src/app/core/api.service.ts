import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkshopService } from '../shared/models/service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private servicesUrl = 'assets/data/services.json'; // static JSON for now

  constructor(private http: HttpClient) {}

  getServices(): Observable<WorkshopService[]> {
    return this.http.get<WorkshopService[]>(this.servicesUrl);
  }
}
