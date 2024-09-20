import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', './footer-media.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.router.events.subscribe(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
