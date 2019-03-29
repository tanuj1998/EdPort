import React from 'react';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';
import { Alert, Card, Col, Row } from 'reactstrap';

const Account = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <Row>
            <Col sm="6">
            <Card body outline color="primary">
              <Alert color="danger">
              <strong> Admission #: 420</strong>
                </Alert>
                <Alert color="primary">
                <strong>Email: {authUser.email}</strong>
                  </Alert>

                <Alert color="info">
                 <strong>Username: Tanuj Yadav</strong>
                  </Alert>

                  <Alert color="warning">
                  <strong> Class: XII</strong>
                    </Alert>
            </Card>
          </Col>
        <Col sm = "6">
          <h3>Change Password</h3>
          <Card body outline color="primary">
        <PasswordChangeForm />
        </Card>
        </Col>
        </Row>
  </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);
