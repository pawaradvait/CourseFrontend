import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private httpClient: HttpClient) {}

  getAllCourses() {
    return this.httpClient.get(`${baseUrl}/course/`);
  }

  deleteCoursesById(id: any) {
    return this.httpClient.delete(`${baseUrl}/course/${id}`);
  }

  adddCourse(course: any) {
    return this.httpClient.post(`${baseUrl}/course/`, course, {
      responseType: 'text',
    });
  }

  getCourseById(id: any) {
    return this.httpClient.get(`${baseUrl}/course/${id}`);
  }
}
