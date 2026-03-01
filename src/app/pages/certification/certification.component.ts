import { Component } from '@angular/core';

@Component({
  selector: 'app-certification',
  standalone: true,
  imports: [],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css'
})
export class CertificationComponent {
  showModal = false;
  selectedCert: string | null = null;

  openModal(cert: string) {
    this.selectedCert = cert;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedCert = null;
  }
}
