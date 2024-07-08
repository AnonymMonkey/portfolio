import { Component } from '@angular/core';
import { ProjectsLeftComponent } from './projects-left/projects-left.component';
import { ProjectsRightComponent } from './projects-right/projects-right.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsLeftComponent, ProjectsRightComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
