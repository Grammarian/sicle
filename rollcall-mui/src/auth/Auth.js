import auth0 from "auth0-js";
import { history } from "../basics";
import { auth0Config } from "../settings";
import { AuthenticateUserMutation } from "../graphql";

const successRoute = "/home";
const failRoute = "/authError";
class Auth {
  auth0 = new auth0.WebAuth({
    domain: auth0Config.domain,
    clientID: auth0Config.clientId,
    redirectUri: auth0Config.callbackUrl,
    audience: "https://app.sicle.com.au", // TODO: check this
    responseType: "token id_token",
    scope: "openid email profile"
  });

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      console.log("parseHash", authResult);
      if (err) {
        console.log(err);
        history.replace(failRoute); // TODO - pass err as a parameter
        alert(`Error: ${err.error}. Check the console for further details.`); // TODO - do this on failure page
        return;
      }
      if (authResult && authResult.accessToken) {
        this.setSession(authResult);
      } else {
        history.replace(failRoute); // TODO - pass message as parameter
      }
    });
  };

  setSession = authResult => {
    console.log("setSession", authResult);

    AuthenticateUserMutation(authResult.accessToken).then(x => {
      const { data: { authenticateUser } } = x;
      console.log("in promise");
      console.log(x);
      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
      localStorage.setItem("current_user_id", authenticateUser.id);
      localStorage.setItem("token", authenticateUser.token);
      localStorage.setItem("expires_at", expiresAt);
      // navigate to the home route
      history.replace(successRoute);
    });
  };

  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem("current_user_id");
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
  };

  isAuthenticated = () => {
    // Do we have an id_token?
    if (!localStorage.getItem("token")) {
      return false;
    }
    return this.millisecondsUntilExpiry() > 0;
  };

  millisecondsUntilExpiry = () => {
    const expiresAtStr = localStorage.getItem("expires_at");
    if (!expiresAtStr) {
      return 0;
    }
    let expiresAt = JSON.parse(expiresAtStr);
    return expiresAt - new Date().getTime();
  };
}

export default Auth;
