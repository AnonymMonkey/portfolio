import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', './projects-media.component.scss'],
})
export class ProjectsComponent {
  @Input() title!: string | null;
  @Input() skills!: string | null;
  @Input() description!: string | null;
  @Input() image!: string;
  @Input() linksProjects!: string;
  @Input() linksGithub!: string;

  formatForJSONKey(title: string): string {
    return title.toUpperCase().replace(/ /g, '_');
  }
}
