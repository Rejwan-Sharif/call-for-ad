import { TestBed } from '@angular/core/testing';

import { AdManagementService } from './ad-management.service';

describe('AdManagementService', () => {
  let service: AdManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
