import { TestBed } from '@angular/core/testing';

import { SaleHttpService } from './sale-http.service';

describe('SaleHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaleHttpService = TestBed.get(SaleHttpService);
    expect(service).toBeTruthy();
  });
});
