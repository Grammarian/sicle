import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { Theme } from "../basics";
import Main from "./Main";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cjdl7f58b0l6d01611ql5p8jd"
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