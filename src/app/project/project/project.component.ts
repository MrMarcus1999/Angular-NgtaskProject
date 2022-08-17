import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'ngprj-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  selectedProject!: Project;
  projects:Project[] = [
    {
      id:1,
      code: 'firstP00',
      name: 'alpha project',
      description: 'lorem ipsum0001',
      start : new Date(2021,1,30),
      end: new Date (2022,3,15),
      priority: 'medium',
      done: true,
      task:[]

    },
    {
      id:2,
      code: 'firstP01',
      name: 'beta project',
      description: 'lorem ipsum002',
      start : new Date(2021,1,30),
      end: new Date (2025,3,15),
      priority: 'low',
      done: true,
      task:[]

    },
    {
      id:3,
      code: 'firstP02',
      name: 'Sigma project',
      description: 'lorem 03321',
      start : new Date(2021,1,30),
      end: new Date (2027,3,15),
      priority: 'high',
      done: false,
      task:[]

    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  selectProject(project:Project){
    this.selectedProject = project;

  }

  submitProjectForm(f:any){
    console.log('form di nostro interesse',f.status);

  }

}
