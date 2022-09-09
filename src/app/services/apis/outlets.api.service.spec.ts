import { TestBed } from '@angular/core/testing';

import { OutletsApiService } from './outlets.api.service';

describe('OutletsApiService', () => {
  let service: OutletsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutletsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
