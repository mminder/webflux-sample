import { TestBed } from '@angular/core/testing';

import { ExternalSystemApiService } from './external-system-api.service';

describe('ExternalSystemApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalSystemApiService = TestBed.get(ExternalSystemApiService);
    expect(service).toBeTruthy();
  });
});
