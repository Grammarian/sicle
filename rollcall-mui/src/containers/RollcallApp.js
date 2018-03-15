import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { graphCoolUri } from "../settings";
import { Theme } from "../basics";
import Main from "./Main";

const client = new ApolloClient({
  link: new HttpLink({
    uri: graphCoolUri
  }),
  cache: new InMemoryCache()
});

class RollcallApp extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Theme>
          <Main {...this.props} />
        </Theme>
      </ApolloProvider>
    );
  }
}

export default RollcallApp;
