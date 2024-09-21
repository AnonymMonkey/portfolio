import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent {
  email: string = 'contact@andino-eichberger.com';

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private translate: TranslateService
  ) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }
}
