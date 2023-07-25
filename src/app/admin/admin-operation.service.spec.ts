import { TestBed } from '@angular/core/testing';

import { AdminOperationService } from './admin-operation.service';

describe('AdminOperationService', () => {
  let service: AdminOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
