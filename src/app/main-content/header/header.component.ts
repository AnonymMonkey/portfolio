import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-media.component.scss'],
})
export class HeaderComponent implements OnInit {
  private observer: IntersectionObserver | undefined;

  constructor(
    private viewportScroller: ViewportScroller,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.updateActiveSectionOnScroll();
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
}
