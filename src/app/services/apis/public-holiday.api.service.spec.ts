import { TestBed } from '@angular/core/testing';

import { PublicHolidayApiService } from './public-holiday.api.service';

describe('PublicHolidayApiService', () => {
  let service: PublicHolidayApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicHolidayApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
