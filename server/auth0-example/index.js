function displayAuthResults(accessToken) {
  var el = document.getElementById("mutation");
  el.style.visibility = "visible";
  var mutation = `
    # Run this mutation in the Graphcool Playground to authenticate a user
  
    mutation {
      authenticateUser(
        accessToken: "${accessToken}"
      ) {
        id
        token
      }
    }
    `;
  el.innerHTML = mutation;
}

//Replace __AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__ and __AUTH0_API_IDENTIFIER__ with your Auth0 ClientId and Domain
document.addEventListener("DOMContentLoaded", function(event) {
  var webAuth = new auth0.WebAuth({
    audience: "https://app.sicle.com.au",
    clientID: "Gg1fS378r1NAD6RGiyv8Diy8B9RSXhFT",
    domain: "sicle.au.auth0.com",
    redirectUri: "http://localhost:5000",
    responseType: "token",
    scope: "openid email"
  });

  var elButton = document.getElementById("authenticate");
  elButton.addEventListener("click", function() {
    webAuth.authorize();
  });

  webAuth.parseHash(function(err, authResult) {
    if (err) return console.error(err);
    if (authResult && authResult.accessToken) {
      window.location.hash = "";
      displayAuthResults(authResult.accessToken);
    }
    console.log(authResult);
  });
});
