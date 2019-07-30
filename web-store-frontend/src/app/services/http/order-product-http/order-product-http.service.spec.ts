import { TestBed } from '@angular/core/testing';

import { OrderProductHttpService } from './order-product-http.service';

describe('OrderProductHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderProductHttpService = TestBed.get(OrderProductHttpService);
    expect(service).toBeTruthy();
  });
});
