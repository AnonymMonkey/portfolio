import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss', './my-skills-media.component.scss'],
})
export class MySkillsComponent {
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
