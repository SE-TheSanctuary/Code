import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button,Jumbotron,Image } from 'react-bootstrap';
import handleSignup from '../../modules/signup';

//<img border="0" height="640" hspace="0" src="/apple-touch-icon-precomposed.png" width="800" />

export default class Signup extends React.Component {
  componentDidMount() {
    handleSignup({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }
//
  render() {
    return (
      <div className="Signup">
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 }>
            <h4 className="page-header">Sign Up</h4>
            <form
              ref={ form => (this.signupForm = form) }
              onSubmit={ this.handleSubmit }
            >
              <Row>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>First Name</ControlLabel>
                    <FormControl
                      type="text"
                      ref="firstName"
                      name="firstName"
                      placeholder="First Name"
                    />
                  </FormGroup>
                </Col>
                <Col xs={ 6 } sm={ 6 }>
                  <FormGroup>
                    <ControlLabel>Last Name</ControlLabel>
                    <FormControl
                      type="text"
                      ref="lastName"
                      name="lastName"
                      placeholder="Last Name"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <ControlLabel>Email Address</ControlLabel>
                <FormControl
                  type="text"
                  ref="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  ref="password"
                  name="password"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Role</ControlLabel><br/>
                <input
                  checked="checked"
                  type="radio"
                  ref="userType"
                  name="userType"
                  value="customer"
                />
                {' Customer   '}
                <input
                  type="radio"
                  ref="userType"
                  name="userType"
                  value="shopOwner"
                />
                {' Shop owner   '}
              </FormGroup>
              <Button type="submit" bsStyle="success">Sign Up</Button>
            </form>
            <p>Already have an account? <Link to="/login">Log In</Link>.</p>
          </Col>
        </Row>
      </div>
    );
  }
}
