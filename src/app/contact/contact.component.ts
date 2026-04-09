import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private http = inject(HttpClient);

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  onSubmit() {
    this.status = 'loading';
    // REMPLACEZ cette URL par le lien ("Endpoint") fourni par Formspree
    const formspreeUrl = 'https://formspree.io/f/VOTRE_IDENTIFIANT_ICI';

    this.http.post(formspreeUrl, this.formData).subscribe({
      next: (response) => {
        this.status = 'success';
        this.formData = { name: '', email: '', subject: '', message: '' }; // reset form
        setTimeout(() => this.status = 'idle', 5000); // reset status after 5s
      },
      error: (error) => {
        console.error('Error sending email', error);
        this.status = 'error';
        setTimeout(() => this.status = 'idle', 5000); // reset status after 5s
      }
    });
  }
}
