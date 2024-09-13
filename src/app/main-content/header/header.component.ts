import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-media.component.scss'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  scrollToSection(sectionId: string): void {
    this.router.navigate([], { fragment: sectionId });
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(sectionId);
    }, 100);
  }
}
