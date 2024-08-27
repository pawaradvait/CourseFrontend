import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourseInstacneComponent } from './list-course-instacne.component';

describe('ListCourseInstacneComponent', () => {
  let component: ListCourseInstacneComponent;
  let fixture: ComponentFixture<ListCourseInstacneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCourseInstacneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCourseInstacneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
