import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../models/Project';
import { LogService } from '../shared/log.service';
import { retry, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // project:Project[] = [
  //   {
  //     id:1,
  //     code: 'firstP00',
  //     name: 'alpha project',
  //     description: 'lorem ipsum0001',
  //     start : new Date(2021,1,30),
  //     end: new Date (2022,3,15),
  //     priority: 'medium',
  //     done: true,
  //     task:[]

  //   },
  //   {
  //     id:2,
  //     code: 'firstP01',
  //     name: 'beta project',
  //     description: 'lorem ipsum002',
  //     start : new Date(2021,1,30),
  //     end: new Date (2025,3,15),
  //     priority: 'low',
  //     done: true,
  //     task:[]

  //   },
  //   {
  //     id:3,
  //     code: 'firstP02',
  //     name: 'Sigma project',
  //     description: 'lorem 03321',
  //     start : new Date(2021,1,30),
  //     end: new Date (2027,3,15),
  //     priority: 'high',
  //     done: false,
  //     task:[]

  //   },
  // ]

  // projectsubject = new BehaviorSubject<Project[]>(this.project)
  constructor(private logservice:LogService, private http:HttpClient ) { }

  getAll(): Observable<Project[]>{
      return this.http.get<Project[]>('http://localhost:5300/projects')
      .pipe(
        retry(3)
      )
    //  .pipe(
    //   tap((data)=>this.logservice.log(`getAll eseguito', ${data}`))
    //  )
  }

  add(project:Project):Observable<Project>{

    const projectToadd = {
         ...project,
          code: Math.random().toString(36).replace('0.', ''),
          done: false,
          task: [],
    }
    return this.http.post<Project>('http://localhost:5300/projects',projectToadd)
    .pipe(
      retry(3)
    )
    // col metodo post noi andiamo a impostare un body che in questo caso è l'oggetto inserito in projectToadd


  }

  get(id:number):Observable<Project>{
    return this.http.get<Project>(`http://localhost:5300/projects/${id}`)
    .pipe(retry(3))
  }

}
