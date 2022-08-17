import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'ngprj-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Project>();
  constructor() { }

  ngOnInit(): void {
  }
  submit(f:NgForm){
   this.submitted.emit({...f.value});

  }

}
