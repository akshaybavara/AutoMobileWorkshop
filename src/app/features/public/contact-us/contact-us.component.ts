import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
sendToWhatsApp(form: any) {
  const name = form.value.name || '';
  const email = form.value.email || '';
  const phone = form.value.phone || '';
  const message = form.value.message || '';
  const text = encodeURIComponent(
    `Contact Request:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  );
  window.open(`https://wa.me/919411104063?text=${text}`, '_blank');
}
}
