import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router'
import { HomeComponent } from "./dashboard/home/home.component";
import { ProjectContainerComponent } from "./project/project-container/project-container.component";
import { ProjectDetailComponent } from "./project/project-detail/project-detail.component";


const routes:Routes = [
  { path: 'projects/detail/:id', component:ProjectDetailComponent },
  { path:'projects', component:ProjectContainerComponent },
  { path:'home', component: HomeComponent},
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'**', redirectTo: '/projects' }, // nel caso in cui venga digitato un path che non esiste!


]
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule {

}
