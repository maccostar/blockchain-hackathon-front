import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentComponent } from './page/student/student.component';
import { TeacherComponent } from './page/teacher/teacher.component';
import { ParentComponent } from './page/parent/parent.component';
import { ExternalComponent } from './page/external/external.component';

import { HttpClientModule } from '@angular/common/http';

import { CommonService } from './service/common.service';
import { CommonPipe } from './pipe/common.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    ParentComponent,
    ExternalComponent,
    CommonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
