import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkshopService } from '../../../shared/models/service';
import { ApiService } from '../../../core/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  service?: WorkshopService;
  bookingForm!: FormGroup;
  selectedService!: WorkshopService | undefined;
  timeSlots: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: ApiService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    const serviceId = Number(this.route.snapshot.paramMap.get('id'));

    // ✅ Fetch service from JSON
    this.apiService.getServices().subscribe((data: WorkshopService[]) => {
      this.selectedService = data.find((s) => s.id === serviceId);
    });

    // ✅ Booking form
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      notes: ['']
    });
  }

  // ✅ Generate time slots (9 AM – 6 PM)
  generateTimeSlots(date: string) {
    this.timeSlots = [];
    let startHour = 9;
    let endHour = 18;
    for (let hour = startHour; hour < endHour; hour++) {
      this.timeSlots.push(`${hour}:00`);
      this.timeSlots.push(`${hour}:30`);
    }
  }

  onDateChange(event: any) {
    const selectedDate = event.value;
    this.generateTimeSlots(selectedDate);
  }

  // ✅ Handle booking
  onSubmit() {
    if (this.bookingForm.valid && this.selectedService) {
      const bookingData = {
        service: this.selectedService,
        ...this.bookingForm.value
      };
      console.log('Booking confirmed:', bookingData);
       // Redirect to success page with state
    this.router.navigate(['/booking-success'], { state: { booking: bookingData } });
       // Show success prompt
      this.snackBar.open('🎉 Booking Confirmed Successfully!', 'Close', {
        duration: 3000, // 3 seconds
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['success-snackbar']
      });
      this.bookingForm.reset();
    }
  }
}
