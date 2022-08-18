import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/models/Project';
import { LogService } from 'src/app/shared/log.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'ngprj-project-container',
  templateUrl: './project-container.component.html',
   styleUrls: ['./project-container.component.css']
})
export class ProjectContainerComponent implements OnInit {
  selectedProject!: Project;
  projects:Project[] = [];
  constructor(private logService:LogService, private projectService:ProjectService) {
    this.logService.log('prova log service')

  }

  ngOnInit(): void {
    this.projects = this.projectService.getAll()
  }

  selectProject(project:Project){
    this.selectedProject = this.projectService.get(project.id)

  }

  submitProjectForm(project:Project){
    this.projectService.add(project)

  }

}
