import { Injectable } from '@angular/core';
import { CanActivate, Route, CanLoad, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {
  Angular2Apollo, ApolloQueryObservable
} from 'angular2-apollo';

import 'rxjs/add/operator/map';
import gql from 'graphql-tag';

const query = gql`
query getSchool ($schoolIdentifier:String!){
  findSchool(schoolIdentifier:$schoolIdentifier){
    id
  }
}`

@Injectable()
export class SchoolCanActivateGuardService implements CanActivate,CanActivateChild, CanLoad {

  constructor(private apollo: Angular2Apollo) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var schoolId: string = route.params['schoolId']

    return this.apollo.query({
      query: query,
      variables: { schoolIdentifier: schoolId }
    }).map(({data}) => {
      if (data.findSchool) {
        return true;
      }
      return false;
    })

  }

  canLoad(route: Route) {
    return true
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
}
