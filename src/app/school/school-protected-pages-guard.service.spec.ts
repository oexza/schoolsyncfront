/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SchoolProtectedPagesGuardService } from './school-protected-pages-guard.service';

describe('SchoolProtectedPagesGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolProtectedPagesGuardService]
    });
  });

  it('should ...', inject([SchoolProtectedPagesGuardService], (service: SchoolProtectedPagesGuardService) => {
    expect(service).toBeTruthy();
  }));
});
