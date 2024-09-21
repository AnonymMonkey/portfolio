import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contact-media.component.scss'],
})
export class ContactComponent {}
