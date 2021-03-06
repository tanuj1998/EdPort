import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


const NavigationNonAuth = () => (
  <div className = "top-bar">
    <div div className="top-bar-right">
    <ul className="vertical medium-horizontal menu">
      <li>
        <Link to={ROUTES.SIGN_IN} className="menu-text1" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Sign In</Link>
      </li>
    </ul>
    </div>
  </div>
);

export default NavigationNonAuth;
