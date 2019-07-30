import { TestBed } from '@angular/core/testing';

import { WarehouseProductHttpService } from './warehouse-product-http.service';

describe('WarehouseProductHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WarehouseProductHttpService = TestBed.get(WarehouseProductHttpService);
    expect(service).toBeTruthy();
  });
});
