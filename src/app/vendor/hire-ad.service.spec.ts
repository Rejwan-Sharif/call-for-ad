import { TestBed } from '@angular/core/testing';

import { HireAdService } from './hire-ad.service';

describe('HireAdService', () => {
  let service: HireAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HireAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
