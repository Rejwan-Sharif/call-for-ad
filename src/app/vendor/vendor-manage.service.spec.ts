import { TestBed } from '@angular/core/testing';

import { VendorManageService } from './vendor-manage.service';

describe('VendorManageService', () => {
  let service: VendorManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
