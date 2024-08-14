import { Component } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrls: [
    './above-the-fold.component.scss',
    './above-the-fold-media.component.scss',
  ],
})
export class AboveTheFoldComponent {
  email: string = 'eichberger.andino@gmail.com';
}
