import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import Notifications from "../Notifications";
import Grades from "../Grades";
import { withAuthentication } from "../Session";

import * as ROUTES from "../../constants/routes";
import "bootstrap/dist/css/bootstrap.min.css";

import "foundation-sites/dist/foundation.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.GRADES} component={Grades} />
      <Route path={ROUTES.NOTIFICATIONS} component={Notifications} />
    </div>
  </Router>
);

export default withAuthentication(App);
