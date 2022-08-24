import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router'
import { HomeComponent } from "./modules/dashboard/pages/home/home.component";
import { ProjectDashboardComponent } from "./modules/project/components/pages/project-dashboard/project-dashboard.component";
import { ProjectDetailComponent } from  "./modules/project/components/pages/project-detail/project-detail.component" ;


const routes:Routes = [
  { path: 'projects/detail/:id', component:ProjectDetailComponent },
  { path:'projects', component:ProjectDashboardComponent },
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
