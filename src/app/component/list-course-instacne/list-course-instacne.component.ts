import { Component, OnInit } from '@angular/core';
import { CourseInstanceService } from 'src/app/service/course-instance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-course-instacne',
  templateUrl: './list-course-instacne.component.html',
  styleUrls: ['./list-course-instacne.component.css'],
})
export class ListCourseInstacneComponent implements OnInit {
  courseInstance = [
    {
      id: 58,
      year: 2022,
      delivery: 1,
      course: {
        id: 136,
        title: 'intro',
        courseCode: 'cs102',
        description: 'sdsd',
      },
    },
  ];
  constructor(private courseInstanceServcie: CourseInstanceService) {}

  ngOnInit(): void {
    this.courseInstanceServcie.getCourseInstance().subscribe((data: any) => {
      this.courseInstance = data;
      console.log(data);
      console.log(this.courseInstance);
    });
  }
  deleteCourse(id: number) {
    console.log(id);
    this.courseInstanceServcie
      .deleteCourseInstanceById(id)
      .subscribe((data) => {
        Swal.fire('success', 'successfully deleted course', 'success');

        this.courseInstanceServcie
          .getCourseInstance()
          .subscribe((data: any) => {
            this.courseInstance = data;
            console.log(data);
            console.log(this.courseInstance);
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
