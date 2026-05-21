import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css'],
})
export class CookieBannerComponent {
  showBanner = false;

  ngOnInit(): void {
    const consent = localStorage.getItem('cookie_consent');

    if (!consent) {
      this.showBanner = true;
    }
  }

  acceptCookies(): void {
    localStorage.setItem('cookie_consent', 'accepted');

    this.showBanner = false;

    // AQUÍ más adelante cargarías:
    // Google Analytics
    // AdSense
    // etc.
  }

  rejectCookies(): void {
    localStorage.setItem('cookie_consent', 'rejected');

    this.showBanner = false;
  }
}
