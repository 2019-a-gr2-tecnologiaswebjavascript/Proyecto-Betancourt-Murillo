import { TestBed } from '@angular/core/testing';

import { UserHandlerService } from './user-handler.service';

describe('UserHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserHandlerService = TestBed.get(UserHandlerService);
    expect(service).toBeTruthy();
  });
});
