/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SchoolCanActivateGuardService } from './school-can-activate-guard.service';

describe('SchoolCanActivateGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolCanActivateGuardService]
    });
  });

  it('should ...', inject([SchoolCanActivateGuardService], (service: SchoolCanActivateGuardService) => {
    expect(service).toBeTruthy();
  }));
});
