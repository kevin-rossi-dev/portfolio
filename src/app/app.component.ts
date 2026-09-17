import { Component } from '@angular/core';

type SkillGroup = 'Tutto' | 'Front-end' | 'Back-end' | 'Mobile' | 'Workflow';

interface Skill {
  name: string;
  category: Exclude<SkillGroup, 'Tutto'>;
  level: string;
  accent: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly skillFilters: SkillGroup[] = ['Tutto', 'Front-end', 'Back-end', 'Mobile', 'Workflow'];
  protected activeFilter: SkillGroup = 'Tutto';

  protected readonly skills: Skill[] = [
    { name: 'Angular', category: 'Front-end', level: 'v15 → v22', accent: 'blue' },
    { name: 'TypeScript', category: 'Front-end', level: 'Web app', accent: 'blue' },
    { name: 'DevExtreme', category: 'Front-end', level: 'UI library', accent: 'cyan' },
    { name: 'Tailwind CSS', category: 'Front-end', level: 'UI system', accent: 'cyan' },
    { name: 'C# / .NET', category: 'Back-end', level: 'Core stack', accent: 'violet' },
    { name: 'ASP.NET MVC', category: 'Back-end', level: 'Web APIs', accent: 'violet' },
    { name: 'Entity Framework', category: 'Back-end', level: 'ORM', accent: 'violet' },
    { name: 'SQL Server / MySQL', category: 'Back-end', level: 'Relational DB', accent: 'orange' },
    { name: 'Swift / SwiftUI', category: 'Mobile', level: 'Native iOS', accent: 'orange' },
    { name: 'Git', category: 'Workflow', level: 'Versioning', accent: 'green' },
    { name: 'Agile / Scrum', category: 'Workflow', level: 'Team practice', accent: 'green' },
    { name: 'REST API', category: 'Workflow', level: 'Integration', accent: 'green' }
  ];

  protected get filteredSkills(): Skill[] {
    return this.activeFilter === 'Tutto'
      ? this.skills
      : this.skills.filter((skill) => skill.category === this.activeFilter);
  }

  protected setFilter(filter: SkillGroup): void {
    this.activeFilter = filter;
  }
}
