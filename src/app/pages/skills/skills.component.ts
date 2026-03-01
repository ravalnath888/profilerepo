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
  { category: 'Frontend', items: 'Angular, TypeScript, HTML, SCSS' },
  { category: 'Backend', items: 'C#, ASP.NET Core Web API, MVC, ADO.NET' },
  { category: 'Database', items: 'SQL Server' },
  { category: 'DevOps', items: 'Git, Azure DevOps (Beginner)' },
    {
    category: 'Tools & Environments',
    items: 'Visual Studio 2019/2022, Visual Studio Code, SQL Server Management Studio (SSMS), Remote Desktop Management, Postman'
  }
];
}
