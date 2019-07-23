import { TestBed } from '@angular/core/testing';

import { HttpPrincipalService } from './http-principal.service';

describe('HttpPrincipalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpPrincipalService = TestBed.get(HttpPrincipalService);
    expect(service).toBeTruthy();
  });
});
