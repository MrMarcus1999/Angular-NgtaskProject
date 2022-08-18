import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project:Project[] = [
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
  ]

  constructor() { }

  getAll(){
    return this.project;
  }

  add(project:Project):void{
    // this.project.push(project)
    this.project.push(
      {  ...project,
        id: this.project.length,
        code: Math.random().toString(36).replace('0.', ''),
        done: false,
        task: [],

      }
    )
  }

  get(id:number):Project{
    return this.project.find(project => project.id === id) as Project
  }


}
