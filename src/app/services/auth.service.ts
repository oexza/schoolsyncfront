import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Angular2Apollo, ApolloQueryObservable,
} from 'angular2-apollo';
import {
  ApolloQueryResult
} from 'apollo-client';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import gql from 'graphql-tag';

const currentUserQuery = gql`
query currentUser {
  me{
    id 
    ... on Staff{
      branch{
        identifier
        school{
          identifier
        }
      }
    }
    ... on Student{
      branch{
        identifier
        school{
          identifier
        }
      }
    }
  }
}`

@Injectable()
export class AuthService {
  redirectUrl: string
  
  constructor(private apollo: Angular2Apollo) { }

  login({username, passsword, schoolId}) {

    return this.apollo.mutate({
      mutation: gql`
                mutation staffLogin($loginCredentials: StaffLoginInputType!) {
                    staffLogin(login_credentials: $loginCredentials) {
                        jwt
                        staff{
                          id
                        }
                    }
                }
            `,
      variables: {
        loginCredentials: {
          email: username,
          password: passsword,
          schoolIdentifier: schoolId
        }
      }
    }).map(({data}) => {
      const loggedInStaffData: any = data.staffLogin;
      
      if (loggedInStaffData) {
        console.log(loggedInStaffData);
        sessionStorage.setItem("token", loggedInStaffData.jwt)
        return loggedInStaffData;
      }
      return null;
    });
  }

  isLoggedInAndBelongsToSchool(schoolIdentifier): Promise<boolean> {
    return this.getCurrentUser().map(({data}) => {
      if (data.me) {
        //alert(JSON.stringify(data))
        if (data.me.branch.school.identifier === schoolIdentifier)
          return true;
        return false
      }
      return false;
    }).toPromise();
  }

  isLoggedIn(): Promise<boolean> {
    return this.getCurrentUser().map(({data}) => {
      //alert(JSON.stringify(data))
      if (data.me) {
        return true
      }
      return false;
    }).toPromise();
  }

  getCurrentUser(): Observable<ApolloQueryResult> {
    return this.apollo.query(
      {
        query: currentUserQuery,
        forceFetch: true
      }
    )
  }
}
