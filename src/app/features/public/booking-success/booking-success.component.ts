import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.css']
})
export class BookingSuccessComponent {
  booking: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.booking = nav?.extras.state?.['booking'];
  }
  downloadPDF() {
  const doc = new jsPDF.jsPDF();

  doc.setFontSize(18);
  doc.text("Service Booking Confirmation", 14, 20);
  autoTable(doc, {
    startY: 30,
    head: [['Field', 'Details']],
    body: [
      ['Service', this.booking.service.name],
      ['Name', this.booking.name],
      ['Phone', this.booking.phone],
      ['Email', this.booking.email],
      ['Date', this.booking.date],
      ['Time', this.booking.time],
      ['Notes', this.booking.notes || 'N/A']
    ],
    theme: 'striped',
    headStyles: { fillColor: [63, 81, 181] }, // Blue header
  });

  // Footer
  doc.setFontSize(10);
  doc.text("Thank you for booking with us!", 14, doc.internal.pageSize.height - 10);
  doc.save('booking-receipt.pdf');
}
sendWhatsApp() {
    const phone = this.booking.phone || '91XXXXXXXXXX'; // include country code
    const message = `Hello ${this.booking.name}, your booking is confirmed!
    
📌 Service: ${this.booking.service}
📅 Date: ${this.booking.date}
⏰ Time: ${this.booking.time}

Thank you for booking with us!`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
