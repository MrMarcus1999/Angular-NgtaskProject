import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectDashboardComponent } from './modules/project/components/pages/project-dashboard/project-dashboard.component';
import { ProjectDetailComponent } from './modules/project/components/pages/project-detail/project-detail.component';
import { ProjectFormComponent } from './modules/project/components/project-form/project-form.component';
import { ProjectListComponent } from './modules/project/components/project-list/project-list.component';
import { HomeComponent } from './modules/dashboard/pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SectionHeaderComponent } from './shared/components/section-header/section-header.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDashboardComponent,
    ProjectDetailComponent,
    ProjectFormComponent,
    ProjectListComponent,
    HomeComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
