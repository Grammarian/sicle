import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { graphCoolUri } from "../settings";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // The item name "id_token" must match that used in ./auth/Auth.js
  const token = localStorage.getItem("token");

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const httpLink = new HttpLink({
  uri: graphCoolUri
});

export const RawGqlClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

class GraphQlClient extends Component {
  render() {
    return <ApolloProvider client={RawGqlClient}>{this.props.children}</ApolloProvider>;
  }
}

export default GraphQlClient;
