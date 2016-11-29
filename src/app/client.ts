import {
  defaultApolloClient,
  APOLLO_PROVIDERS
} from 'angular2-apollo';

import ApolloClient, {
  createNetworkInterface
} from 'apollo-client';

const graphqlURL: string = "http://localhost:9000/graphql"
const networkInterface = createNetworkInterface({
  uri: graphqlURL,
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }

    var setJWTToken = function () {
      if (sessionStorage.getItem('token')) {
        req.options.headers['Authorization'] = 'Bearer:' +sessionStorage.getItem('token')    
      }
    }
    setJWTToken()
    next()
  }
}]);

const client = new ApolloClient({
  networkInterface: networkInterface
});

export{
  client
}