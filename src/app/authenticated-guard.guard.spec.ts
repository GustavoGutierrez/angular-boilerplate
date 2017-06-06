import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenticatedGuardGuard } from './authenticated-guard.guard';

describe('AuthenticatedGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticatedGuardGuard]
    });
  });

  it('should ...', inject([AuthenticatedGuardGuard], (guard: AuthenticatedGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
