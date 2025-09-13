import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WorkshopService } from '../../../shared/models/service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent {
  @Input() service!: WorkshopService;
  @Input() showActions: boolean = true;
  // ✅ Strongly type EventEmitter
  @Output() book: EventEmitter<WorkshopService> = new EventEmitter<WorkshopService>();

  onBook() {
    this.book.emit(this.service);  // ✅ will emit a WorkshopService
  }
}
