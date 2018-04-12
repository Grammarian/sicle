import gql from "graphql-tag";
import { RawGqlClient } from "../graphql";

const authenticateUser = gql`
  mutation authenticateUser($accessToken: String!) {
    authenticateUser(accessToken: $accessToken) {
      id
      token
    }
  }
`;

function AuthenticateUserMutation(accessToken) {
  console.log("AuthenticateUserMutation");
  console.log(RawGqlClient);
  console.log(accessToken);
  return RawGqlClient.mutate({
    mutation: authenticateUser,
    variables: {
      accessToken
    }
  });
}

export default AuthenticateUserMutation;
