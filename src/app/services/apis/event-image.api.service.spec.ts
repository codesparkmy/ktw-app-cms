import { TestBed } from '@angular/core/testing';

import { EventImageApiService } from './event-image.api.service';

describe('EventImageApiService', () => {
  let service: EventImageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventImageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
