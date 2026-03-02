import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MatButtonModule } from '@angular/material/button';

// Define a Project interface (optional but cleaner)
export interface Project {
  title: string;
  tech: string;
  link?: string;   // optional for View Project button
}

@Component({
  selector: 'app-project-card',
  standalone: true, // Angular 17+ standalone component
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  // Receive data from parent component (like Home)
  //@Input() project!: Project;
  @Input() project!: { title: string; tech: string; link?: string; };

  // Optional: handle View Project click
  viewProject() {
    if (this.project.link) {
      window.open(this.project.link, '_blank');
    } else {
      alert('Project link not available!');
    }
  }
   showAuthXPopup = false;
openPopup() {
  this.showAuthXPopup = true;
}

closePopup() {
  this.showAuthXPopup = false;
}
}