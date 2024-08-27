import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AddCourseComponent } from './component/add-course/add-course.component';
import { AddCourseInstanceComponent } from './component/add-course-instance/add-course-instance.component';
import { ListCourseComponent } from './component/list-course/list-course.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ListCourseInstacneComponent } from './component/list-course-instacne/list-course-instacne.component';
import { MatCardModule } from '@angular/material/card';
import {
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
} from 'ngx-ui-loader';
import { ViewCourseComponent } from './component/view-course/view-course.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewCourseInstanceComponent } from './component/view-course-instance/view-course-instance.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#00ACC1',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'square-loader', // background loader type
  fgsType: 'square-loader', // foreground loader type
  fgsColor: '#00ACC1',
  pbDirection: 'ltr',
  pbThickness: 5,
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AddCourseComponent,
    AddCourseInstanceComponent,
    ListCourseComponent,
    ListCourseInstacneComponent,
    ViewCourseComponent,
    ViewCourseInstanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
