import {
  Component,
  QueryList,
  AfterViewInit,
  ViewChildren,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', './portfolio-media.component.scss'],
})
export class PortfolioComponent implements AfterViewInit {
  @ViewChildren(ProjectsComponent, { read: ElementRef })
  projects!: QueryList<ElementRef>;

  projectsData = {
    title: ['Join', 'El Pollo Loco', 'Another Project'],
    skills: [
      'Firebase | JavaScript | HTML | CSS',
      'JavaScript | HTML | CSS',
      'Another Project',
    ],
    description: [
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and Salsa bottles to fight against the chickens.',
      'Another Project',
    ],
    images: [
      'assets/img/projects/join-laptop.png',
      'assets/img/projects/pollo-loco-laptop.png',
      'assets/img/projects/join-laptop.png',
    ],
    linksProjects: [
      'https://andino-eichberger.developerakademie.net/join/index.html',
      'https://andino-eichberger.developerakademie.net/el-pollo-loco/index.html',
      '#',
    ],
    linksGithub: [
      'https://github.com/AnonymMonkey/join',
      'https://github.com/AnonymMonkey/el-pollo-loco',
      '#',
    ],
  };

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const mediaQuery = window.matchMedia('(min-width: 1200px)');

    const applyAlignEndClass = () => {
      if (mediaQuery.matches) {
        let count = 1;
        this.projects.forEach((project: ElementRef) => {
          const projectRightside =
            project.nativeElement.querySelector('.projects');
          if (count % 2 === 0) {
            this.renderer.addClass(projectRightside, 'align-end');
          }
          count++;
        });
      } else {
        this.projects.forEach((project: ElementRef) => {
          const projectRightside =
            project.nativeElement.querySelector('.projects');
          this.renderer.removeClass(projectRightside, 'align-end');
        });
      }
    };

    applyAlignEndClass();

    mediaQuery.addEventListener('change', applyAlignEndClass);
  }
}
