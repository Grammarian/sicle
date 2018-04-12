import RollcallApp from "../containers/RollcallApp.js";
import SigninPage from "../containers/SigninPage.js";
import PrivacyPage from "../containers/PrivacyPage.js";
import AuthCallback from "../auth/AuthCallback";

const topLevel = [
  { path: "/privacy", component: PrivacyPage },
  { path: "/signin", component: SigninPage },
  { path: "/callback", component: AuthCallback },
  { path: "/", component: RollcallApp }
];

export default topLevel;
