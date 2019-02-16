import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './page/student/student.component';
import { TeacherComponent } from './page/teacher/teacher.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'admin', component: TeacherComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
