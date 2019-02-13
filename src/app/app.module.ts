import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentComponent } from './page/student/student.component';
import { TeacherComponent } from './page/teacher/teacher.component';
import { ParentComponent } from './page/parent/parent.component';
import { ExternalComponent } from './page/external/external.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    ParentComponent,
    ExternalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
