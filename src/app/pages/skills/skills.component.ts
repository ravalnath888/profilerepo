import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'HTML', icon: 'devicon-html5-plain colored' },
      { name: 'SCSS', icon: 'devicon-sass-original colored' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'C#', icon: 'devicon-csharp-plain colored' },
      { name: 'ASP.NET Core Web API', icon: 'devicon-dotnetcore-plain colored' },
      { name: 'MVC', icon: 'devicon-dot-net-plain colored' },
      { name: 'ADO.NET', icon: 'devicon-dot-net-plain colored' },
      { name: 'Entity Framework', icon: 'devicon-dot-net-plain colored' }, 
      { name: 'LINQ', icon: 'devicon-dot-net-plain colored' } 
    ]
  },
  {
    category: 'Database',
    items: [
      { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored' }
    ]
  },
  {
    category: 'DevOps',
  items: [
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'Azure DevOps (Beginner)', icon: 'devicon-azure-plain colored' },
    { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
    { name: 'Terraform', icon: 'devicon-terraform-plain colored' },
    { name: 'CI/CD', icon: 'devicon-githubactions-plain colored' },
    { name: 'AWS', icon: 'fa-brands fa-aws' }
  ]
  }
];
}
