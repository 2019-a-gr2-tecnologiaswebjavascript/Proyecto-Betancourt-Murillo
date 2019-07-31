import { TestBed } from '@angular/core/testing';

import { UserRolService } from './user-rol.service';

describe('UserRolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserRolService = TestBed.get(UserRolService);
    expect(service).toBeTruthy();
  });
});
