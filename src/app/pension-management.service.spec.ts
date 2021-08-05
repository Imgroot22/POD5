import { TestBed } from '@angular/core/testing';

import { PensionManagementService } from './pension-management.service';

describe('PensionManagementService', () => {
  let service: PensionManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensionManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
