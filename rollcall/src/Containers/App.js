import React from "react";
import Main from "./Main";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjdl7f58b0l6d01611ql5p8jd"
});

const App = () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
);

export default App;
