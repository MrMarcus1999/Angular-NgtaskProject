import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'ngprj-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
    project$!:Observable<Project>;
  constructor(private activatedroute:ActivatedRoute, private projectservice:ProjectService) { }

  ngOnInit(): void {

    this.project$ = this.activatedroute.paramMap.pipe(
        switchMap((params:ParamMap) => this.projectservice.get(+params.get('id')!) )
      )

  }

}



