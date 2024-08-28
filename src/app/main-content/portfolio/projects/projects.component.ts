import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', './projects-media.component.scss'],
})
export class ProjectsComponent {
  @Input() title!: string;
  @Input() skills!: string;
  @Input() description!: string;
  @Input() image!: string;
}
