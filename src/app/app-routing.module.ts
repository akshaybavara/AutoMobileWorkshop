import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/public/home/home.component';
import { ServiceDetailComponent } from './features/public/services/service-detail/service-detail.component';
import { ServicesListComponent } from './features/public/services/services-list/services-list.component';
import { BookingComponent } from './features/public/booking/booking.component';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { ServicesCrudComponent } from './features/admin/services-crud/services-crud.component';
import { AppointmentsComponent } from './features/admin/appointments/appointments.component';
import { BookingSuccessComponent } from './features/public/booking-success/booking-success.component';
import { ContactUsComponent } from './features/public/contact-us/contact-us.component';
import { AboutUsComponent } from './features/public/about-us/about-us.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Public pages
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesListComponent },
  { path: 'services/:slug', component: ServiceDetailComponent },
  { path: 'booking/:id', component: BookingComponent },
  { path: 'booking-success', component: BookingSuccessComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  // Admin pages
  {
    path: 'admin',
    children: [
      { path: '', component: DashboardComponent },
      { path: 'services-crud', component: ServicesCrudComponent },
      { path: 'appointments', component: AppointmentsComponent }
    ]
  },

  // Fallback
  { path: '**', redirectTo: '/home' },
  // { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
