import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { environment} from '../environments/environment.development';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { ServicesCrudComponent } from './features/admin/services-crud/services-crud.component';
import { AppointmentsComponent } from './features/admin/appointments/appointments.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ServiceCardComponent } from './shared/components/service-card/service-card.component';
import { HomeComponent } from './features/public/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './features/public/booking/booking.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import{ServicesListComponent} from './features/public/services/services-list/services-list.component';
import{ServiceDetailComponent} from './features/public/services/service-detail/service-detail.component';
import { BackToTopComponent } from './shared/components/back-to-top/back-to-top.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BookingSuccessComponent } from './features/public/booking-success/booking-success.component';
import { ContactUsComponent } from './features/public/contact-us/contact-us.component';
import { AboutUsComponent } from './features/public/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiceDetailComponent,
    DashboardComponent,
    ServicesCrudComponent,
    AppointmentsComponent,
    ServiceCardComponent,
    HomeComponent,
    BookingComponent,
    ServicesListComponent,
    ServiceDetailComponent,
    BackToTopComponent,
    BookingSuccessComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule ,
    MatIconModule,
    MatSidenavModule,
    MatSidenavModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
