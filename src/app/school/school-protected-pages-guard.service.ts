import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CanActivate, Route, Router, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {
  Angular2Apollo, ApolloQueryObservable
} from 'angular2-apollo';

import 'rxjs/add/operator/map';
import gql from 'graphql-tag';

@Injectable()
export class SchoolProtectedPagesGuardService implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var schoolId: string = route.parent.parent.params['schoolId']

    //alert(schoolId)
    if (schoolId) {
      const isLoggedInAndBelongsToSchoolObservable: Observable<boolean> = Observable.fromPromise(this.authService.isLoggedInAndBelongsToSchool(schoolId))

      return isLoggedInAndBelongsToSchoolObservable.map((res) => {
        if (res)
          return true;
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = state.url;
        // Navigate to the school home page
        this.router.navigate(['/' ,schoolId]);
        return false;
      })

    }
    return Observable.fromPromise(Promise.resolve(false));
  }

  canLoad(route: Route) {
    return this.authService.isLoggedIn();
  }
}
