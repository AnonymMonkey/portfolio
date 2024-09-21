import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landscape-warning',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landscape-warning.component.html',
  styleUrl: './landscape-warning.component.scss',
})
export class LandscapeWarningComponent implements OnInit {
  showLandscapeWarning: boolean = false;
  currentLang: string = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.checkOrientation();
    this.currentLang =
      this.translate.currentLang || this.translate.getDefaultLang();
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: any) {
    this.checkOrientation();
  }

  checkOrientation(): void {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isLandscape = window.innerWidth > window.innerHeight;

    this.showLandscapeWarning = isMobile && isLandscape;
  }

  isEnglish(): boolean {
    return this.currentLang === 'en';
  }

  isGerman(): boolean {
    return this.currentLang === 'de';
  }
}
