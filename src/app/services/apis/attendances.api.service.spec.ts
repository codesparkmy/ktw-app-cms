import { TestBed } from '@angular/core/testing';

import { AttendancesApiService } from './attendances.api.service';

describe('AttendacesApiService', () => {
  let service: AttendancesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendancesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
