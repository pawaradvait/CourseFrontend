import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css'],
})
export class ViewCourseComponent implements OnInit {
  course = {
    title: '',
    courseCode: '',
    description: '',
  };
  id: any = 0;
  constructor(
    private courseService: CourseService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(this.id).subscribe((data: any) => {
      this.course = data;
      console.log(this.course);
    });
  }
}
