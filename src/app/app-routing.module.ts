import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MergePdfComponent } from './pages/merge-pdf/merge-pdf.component';
import { CompressPdfComponent } from './pages/compress-pdf/compress-pdf.component';
import { SplitPdfComponent } from './pages/split-pdf/split-pdf.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { SupportComponent } from './pages/support/support.component';

const routes: Routes = [
  { path: 'compress-pdf', component: CompressPdfComponent },
  { path: 'merge-pdf', component: MergePdfComponent },
  { path: 'split-pdf', component: SplitPdfComponent },

  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'support', component: SupportComponent },
  
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
