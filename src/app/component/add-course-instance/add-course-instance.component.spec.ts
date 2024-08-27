import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseInstanceComponent } from './add-course-instance.component';

describe('AddCourseInstanceComponent', () => {
  let component: AddCourseInstanceComponent;
  let fixture: ComponentFixture<AddCourseInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseInstanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
