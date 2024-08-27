import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  course = {
    title: '',
    courseCode: '',
    description: '',
  };
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {}
  courseadding() {
    console.log(this.course);
    this.courseService.adddCourse(this.course).subscribe((data: any) => {
      console.log(data);
      Swal.fire('success', 'Successfully added course', 'success');
    });
  }
}
