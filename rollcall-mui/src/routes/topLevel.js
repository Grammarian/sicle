import Main from "../containers/Main.js";
import HomePage from "../containers/HomePage";
import AlertPage from "../containers/AlertPage";
import SigninPage from "../containers/SigninPage.js";
import PrivacyPage from "../containers/PrivacyPage.js";
import AuthCallback from "../auth/AuthCallback";

const topLevel = [
  { path: "/privacy", component: PrivacyPage },
  { path: "/signin", component: SigninPage },
  { path: "/callback", component: AuthCallback },
  { path: "/home", component: HomePage },
  { path: "/alert", component: AlertPage },
  { path: "/", component: HomePage, exact: true },

  // Everything else will be directed to the main page
  { path: "/", component: Main }
];

export default topLevel;
