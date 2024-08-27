import { Component, OnInit } from '@angular/core';
import { CourseInstanceService } from 'src/app/service/course-instance.service';
import { CourseService } from 'src/app/service/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course-instance',
  templateUrl: './add-course-instance.component.html',
  styleUrls: ['./add-course-instance.component.css'],
})
export class AddCourseInstanceComponent implements OnInit {
  courseInstance = {
    year: 0,
    delivery: 0,
    course: {
      id: 0,
    },
  };
  constructor(
    private courseInstacnes: CourseInstanceService,
    private courseservice: CourseService
  ) {}
  id: any = [];
  ngOnInit(): void {
    this.courseservice.getAllCourses().subscribe((data: any) => {
      data.forEach((element: any) => {
        this.id.push(Number(element.id));
      });
      console.log(this.id);
    });
  }
  courseInstanceadding() {
    if (
      this.courseInstance.course.id == 0 ||
      this.courseInstance.course.id == null
    ) {
      alert('select course id');
      return;
    }

    this.courseInstance.course.id = Number(this.courseInstance.course.id);
    console.log(this.courseInstance);

    this.courseInstacnes
      .addCourseInstance(this.courseInstance)
      .subscribe((data) => {
        console.log(data);
        Swal.fire('success', 'successfully added courseInstance', 'success');
      });
  }
}
