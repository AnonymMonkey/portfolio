import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';
import { PortfolioComponent } from './main-content/portfolio/portfolio.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { ImprintComponent } from './shared/imprint/imprint.component';
import { PrivacyComponent } from './shared/privacy/privacy.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'skills', component: MySkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent },
];
