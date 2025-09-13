import { Component, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpeedFixAutomobile';
  isMobile = false;
  sidenavOpened = false;
  currentYear = new Date().getFullYear();

constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  iconRegistry.addSvgIcon('whatsapp', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/whatsapp.svg'));
  iconRegistry.addSvgIcon('youtube', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/youtube.svg'));
  iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'));
  iconRegistry.addSvgIcon('x', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/x.svg'));
  iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg'));
  iconRegistry.addSvgIcon('googlemaps', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/googlemaps.svg'));
  this.checkScreenSize();
}
  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  closeSidenav() {
    this.sidenavOpened = false;
  }
}
