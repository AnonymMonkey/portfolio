import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LandscapeWarningComponent } from './shared/landscape-warning/landscape-warning.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
    LandscapeWarningComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor() {}
  ngOnInit(): void {
    AOS.init({
      disable: false, // AOS für alle Geräte aktivieren
      once: false, // Animationen nur einmal abspielen
      mirror: false, // Keine rückwärtigen Animationen beim Scrollen nach oben
      offset: 120, // Startpunkt der Animationen in Pixeln
      duration: 800, // Dauer der Animationen in Millisekunden
      disableMutationObserver: false, // Observer aktiv lassen
    });
  }
}
