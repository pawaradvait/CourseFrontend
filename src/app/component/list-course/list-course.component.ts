import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CourseService } from 'src/app/service/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css'],
})
export class ListCourseComponent implements OnInit {
  courses: any = [
    {
      id: 0,
      title: '',
      courseCode: '',
      description: '',
    },
  ];
  courseTester: Subject<any> = new Subject<any>();
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((data: any) => {
      this.courses = data;
      this.courseTester = data;
      console.log(this.courseTester);
    });
  }

  deleteCourse(id: any) {
    console.log(id);
    this.courseService.deleteCoursesById(id).subscribe((data: any) => {
      Swal.fire('success', 'successfully deleted course', 'success');

      this.courseService.getAllCourses().subscribe((data: any) => {
        this.courses = data;
        this.courseTester = data;
        console.log(this.courseTester);
      });
    });
  }

  isModalOpen = false;
  selectedCourse: any = null;

  openModal(course: any) {
    this.selectedCourse = course;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedCourse = null;
  }
}
