import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project/project.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectFormComponent } from './project/project-form/project-form.component';
import { ProjectListComponent } from './project/project-list/project-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectDetailComponent,
    ProjectFormComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
