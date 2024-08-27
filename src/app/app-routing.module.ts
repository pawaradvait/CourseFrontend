import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './component/add-course/add-course.component';
import { ListCourseComponent } from './component/list-course/list-course.component';
import { AddCourseInstanceComponent } from './component/add-course-instance/add-course-instance.component';
import { ListCourseInstacneComponent } from './component/list-course-instacne/list-course-instacne.component';
import { ViewCourseComponent } from './component/view-course/view-course.component';
import { ViewCourseInstanceComponent } from './component/view-course-instance/view-course-instance.component';
const routes: Routes = [
  {
    path: 'add-course',
    component: AddCourseComponent,
    pathMatch: 'full',
  },
  { path: 'list-course', component: ListCourseComponent },
  { path: 'add-course-instance', component: AddCourseInstanceComponent },
  { path: 'add-courseInstance', component: AddCourseInstanceComponent },
  { path: 'list-courseInstance', component: ListCourseInstacneComponent },
  { path: 'viewCourse/:id', component: ViewCourseComponent },
  { path: 'viewCourseInstance/:year/:id',component: ViewCourseInstanceComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
