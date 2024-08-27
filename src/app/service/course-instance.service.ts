import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root',
})
export class CourseInstanceService {
  constructor(private htppClient: HttpClient) {}

  addCourseInstance(courseInstance: any) {
    return this.htppClient.post(`${baseUrl}/instance/`, courseInstance, {
      responseType: 'text',
    });
  }

  getCourseInstance() {
    return this.htppClient.get(`${baseUrl}/instance/`);
  }

  deleteCourseInstanceById(id: any) {
    return this.htppClient.delete(`${baseUrl}/instance/${id}`, {
      responseType: 'text',
    });
  }

  getCourseInstanceById(id: any, year: any) {
    console.log(year);
    return this.htppClient.get(`${baseUrl}/instance/${year}/${id}`);
  }
}
