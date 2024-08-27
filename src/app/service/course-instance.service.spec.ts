import { TestBed } from '@angular/core/testing';

import { CourseInstanceService } from './course-instance.service';

describe('CourseInstanceService', () => {
  let service: CourseInstanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseInstanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
