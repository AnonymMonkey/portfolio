import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TranslateModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-media.component.scss'],
})
export class HeaderComponent implements OnInit {
  private observer: IntersectionObserver | undefined;
  currentLang: string = 'en';

  constructor(
    private viewportScroller: ViewportScroller,
    private translate: TranslateService,
    private renderer: Renderer2
  ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.updateActiveSectionOnScroll();
    this.currentLang =
      this.translate.currentLang || this.translate.getDefaultLang();
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
    this.closeBurgerMenu();
  }

  closeBurgerMenu(): void {
    const checkbox = document.querySelector(
      '.burger-menu .checkbox'
    ) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateActiveSectionOnScroll();
  }

  updateActiveSectionOnScroll() {
    const sections = document.querySelectorAll(
      'app-about-me, app-my-skills, app-portfolio'
    );

    let currentSection: string | null = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionId = section.getAttribute('id');

      if (
        rect.top <= window.innerHeight * 0.3 &&
        rect.bottom >= window.innerHeight * 0.2
      ) {
        currentSection = sectionId;
      }
    });

    this.updateActiveLink(currentSection);
  }

  updateActiveLink(sectionId: string | null) {
    const links = document.querySelectorAll('.qick-links a');

    links.forEach((link) => {
      this.renderer.removeClass(link, 'active');
    });

    if (sectionId) {
      const activeLink = document.querySelector(
        `.qick-links a[data-section="${sectionId}"]`
      );
      if (activeLink) {
        this.renderer.addClass(activeLink, 'active');
      }
    }
  }

  isEnglish(): boolean {
    return this.currentLang === 'en';
  }

  isGerman(): boolean {
    return this.currentLang === 'de';
  }
}
