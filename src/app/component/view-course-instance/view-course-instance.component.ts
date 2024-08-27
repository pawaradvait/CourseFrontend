import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseInstanceService } from 'src/app/service/course-instance.service';

@Component({
  selector: 'app-view-course-instance',
  templateUrl: './view-course-instance.component.html',
  styleUrls: ['./view-course-instance.component.css'],
})
export class ViewCourseInstanceComponent implements OnInit {
  courseInstance = {
    year: 0,
    delivery: 0,
    course: {
      id: 0,
      title: '',
    },
  };

  id: any = 0;
  year: any = 0;
  constructor(
    private courseInstanceService: CourseInstanceService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.year = Number(this.router.snapshot.paramMap.get('year'));
    this.courseInstanceService
      .getCourseInstanceById(this.id, this.year)
      .subscribe((data: any) => {
        this.courseInstance = data;
        console.log(data);
      });
  }
}
