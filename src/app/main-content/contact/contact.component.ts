import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact-media.component.scss'],
})
export class ContactComponent {}
