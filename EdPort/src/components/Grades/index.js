import React, { Component } from 'react';
import { AuthUserContext, withAuthorization } from '../Session';

class Grades extends Component {
  render() {
    return (
      <div>
            <h3>Grades</h3>
    </div>
    );
  }
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(Grades);
