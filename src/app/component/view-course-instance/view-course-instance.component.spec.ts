import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourseInstanceComponent } from './view-course-instance.component';

describe('ViewCourseInstanceComponent', () => {
  let component: ViewCourseInstanceComponent;
  let fixture: ComponentFixture<ViewCourseInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCourseInstanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCourseInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
