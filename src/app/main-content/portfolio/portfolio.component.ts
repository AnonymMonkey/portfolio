import {
  Component,
  QueryList,
  AfterViewInit,
  ViewChildren,
  Renderer2,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectsComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss', './portfolio-media.component.scss'],
})
export class PortfolioComponent implements AfterViewInit {
  @ViewChildren(ProjectsComponent, { read: ElementRef })
  projects!: QueryList<ElementRef>;

  projectsData = [
    {
      key: 'JOIN',
      title: '', // Leer statt null
      skills: '',
      description: '',
      image: 'assets/img/projects/join-laptop.png',
      linksProjects: 'https://join.andino-eichberger.com/index.html',
      linksGithub: 'https://github.com/AnonymMonkey/join',
    },
    {
      key: 'EL_POLLO_LOCO',
      title: '',
      skills: '',
      description: '',
      image: 'assets/img/projects/pollo-loco-laptop.png',
      linksProjects: 'https://el-pollo-loco.andino-eichberger.com/index.html',
      linksGithub: 'https://github.com/AnonymMonkey/el-pollo-loco',
    },
    {
      key: 'WORK_IN_PROGRESS',
      title: '',
      skills: '',
      description: '',
      image: 'assets/img/projects/join-laptop.png',
      linksProjects: '#',
      linksGithub: '#',
    },
  ];

  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    private translate: TranslateService
  ) {}

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

    this.loadTranslations();

    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }

  loadTranslations() {
    this.projectsData.forEach((project) => {
      this.translate
        .get(`PORTFOLIO.PROJECTS.${project.key}.TITLE`)
        .subscribe((translatedTitle: string) => {
          project.title = translatedTitle;
        });
      this.translate
        .get(`PORTFOLIO.PROJECTS.${project.key}.SKILLS`)
        .subscribe((translatedSkills: string) => {
          project.skills = translatedSkills;
        });
      this.translate
        .get(`PORTFOLIO.PROJECTS.${project.key}.DESCRIPTION`)
        .subscribe((translatedDescription: string) => {
          project.description = translatedDescription;
        });
    });
    this.cdr.detectChanges();
  }
}
