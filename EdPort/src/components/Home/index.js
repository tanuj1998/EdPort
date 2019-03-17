import React, { Component } from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import './home.css';

class HomePage extends Component {
  constructor(){
    super();
    this.state = {
      authUser: null

    }
  }

  async componentDidMount() {
    this.props.firebase.db.collection("Users").doc(this.props.firebase.auth.O).onSnapshot(docSnapshot => {
      console.log(`Received doc snapshot: docSnapshot`, docSnapshot.data());
      this.setState({
        username: docSnapshot.data().username
      });      // ...
    }, err => {
      console.log(`Encountered error: ${err}`);
    });
  }


  render() {
    return (
      <AuthUserContext.Consumer>
      {authUser => (
      <div>

        <div className="home-page">
          <h1>Welcome to EdPort, {this.state.username}</h1>

            <div className="row">
                <div className="column small-centered small-11 medium-6 large-5">


            </div>
          </div>
        </div>

        </div>
      )}
      </AuthUserContext.Consumer>
    );

  }

}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
