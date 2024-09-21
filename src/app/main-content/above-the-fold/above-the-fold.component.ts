import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrls: [
    './above-the-fold.component.scss',
    './above-the-fold-media.component.scss',
  ],
})
export class AboveTheFoldComponent {
  email: string = 'contact@andino-eichberger.com';

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
