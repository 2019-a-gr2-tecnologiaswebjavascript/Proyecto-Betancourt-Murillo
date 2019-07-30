import { TestBed } from '@angular/core/testing';

import { WarehouseHttpService } from './warehouse-http.service';

describe('WarehouseHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WarehouseHttpService = TestBed.get(WarehouseHttpService);
    expect(service).toBeTruthy();
  });
});
