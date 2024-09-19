import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss', './form-media.component.scss'],
})
export class FormComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  mailTest = false;

  post = {
    endPoint: 'https://andino-eichberger.com/php-scripts/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json' as const,
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error('Fehler bei der Anfrage:', error);
          },
          complete: () => console.info('Anfrage abgeschlossen'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  checkFieldValidity(field: NgModel) {
    return field.invalid && (field.dirty || field.touched);
  }
}
