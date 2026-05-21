import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { MergePdfComponent } from './pages/merge-pdf/merge-pdf.component';
import { CompressPdfComponent } from './pages/compress-pdf/compress-pdf.component';
import { SplitPdfComponent } from './pages/split-pdf/split-pdf.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { SupportComponent } from './pages/support/support.component';
import { HeaderComponent } from './components/header/header.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MergePdfComponent,
    CompressPdfComponent,
    SplitPdfComponent,
    FooterComponent,
    PrivacyComponent,
    TermsComponent,
    SupportComponent,
    HeaderComponent,
    CookieBannerComponent,
    AdBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
