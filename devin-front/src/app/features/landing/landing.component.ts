import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { FeaturesComponent } from './components/features.component';
import { ProcessComponent } from './components/process.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { FaqComponent } from './components/faq.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    ProcessComponent,
    TestimonialsComponent,
    FaqComponent,
    FooterComponent
  ],
  template: `
    <app-header />
    <app-hero />
    <app-features />
    <app-process />
    <app-testimonials />
    <app-faq />
    <app-footer />
  `
})
export class LandingComponent {}
