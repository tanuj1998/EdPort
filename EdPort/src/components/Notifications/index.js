import React, { Component } from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
class Notifications extends Component {


  render() {
    return (
      <div>
            <h3>No Notifications</h3>
    </div>
    );
  }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(Notifications);
