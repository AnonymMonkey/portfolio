import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
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
    this.observeSections();
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

  observeSections() {
    const sections = document.querySelectorAll(
      'app-about-me, app-my-skills, app-portfolio'
    );
    const options = {
      root: null,
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      let activeSectionId: string | null = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          if (sectionId) {
            activeSectionId = sectionId;
          }
        }
      });

      this.updateActiveLink(activeSectionId);
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
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
