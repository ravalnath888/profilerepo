import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Required for *ngFor, *ngIf
import { ProjectCardComponent } from '../../shared/project-card/project-card.component'; // ✅ your shared card
import { SkillsComponent } from '../skills/skills.component'; // ✅ import SkillsComponent here

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent,SkillsComponent], // ✅ include CommonModule here!
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  projects = [
    {
    title: 'AuthX - Secure Authentication System',
    tech: 'Angular • ASP.NET Core Web API • SQL Server',
    description: `An end-to-end authentication and authorization system 
                  implementing JWT tokens, role-based access control, and 
                  user management dashboards.`,
    link: 'https://www.authx.com/', // optional GitHub/live link
    },
    {
      title: 'Portfolio Website',
      tech: 'Angular, TypeScript',
      link: '#'
    },
  ];
}