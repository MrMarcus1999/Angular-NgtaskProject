import { NgForOf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from 'src/app/models/Project';
import { LogService } from 'src/app/shared/log.service';
import { ProjectService } from '../project.service';
import { Observable,Observer, Subscription } from "rxjs";
import { interval,PartialObserver } from "rxjs";
import { map,filter } from "rxjs/operators";
import { Router } from '@angular/router';

// const obs$ = new  Observable ((observer:Observer<number>)=> {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.next(4);
//   observer.next(5);
//   observer.next(6);


// })


// let observerA: Observer<number> = {
//   next:(value:number) => {
//     console.log('valore di riferimento', value);

//   },
//   error:(err)=>{
//     console.log('errore', err);

//   },
//   complete:()=> {
//     console.log('Operazione completata!');

//   }
// }
// let observerB: Observer<number> = {
//   next:(value:number) => {

//     console.log('ObsB', value * 23/2);

//   },
//   error:(err)=>{
//     console.log('errore', err);

//   },
//   complete:()=> {
//     console.log('Operazione completata!');

//   }
// }

// obs$.subscribe(observerA);
// obs$.subscribe(observerB);

// const int = interval(5000)

// const observable$ = int.pipe(
//   map((value:number) => value * 34 )
// );

// observable$.subscribe(value =>  console.log(value));
// subject




@Component({
  selector: 'ngprj-project-container',
  templateUrl: './project-container.component.html',
   styleUrls: ['./project-container.component.css']
})
export class ProjectContainerComponent implements OnInit{
  subscription!: Subscription;

  // projects:Project[] = [];
  projects$!:Observable<Project[]>;


  constructor(private logService:LogService, private projectService:ProjectService, private router: Router ) {
  }


  ngOnInit(): void {
    this.projects$ = this.projectService.getAll();

  }


  selectProject(project:Project){
    this.router.navigate(['/projects', 'detail', project.id])
    // questa funzione ci permetterà di navigare in maniera programmatica all'interno
    // del path project/details/id
  }

  submitProjectForm(project:Project){
    this.projectService.add(project).subscribe(data => this.projects$ = this.projectService.getAll());

  }





}
