import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Public from '../pages/Public';
import Authenticated from '../pages/Authenticated';
import AppNavigation from '../components/AppNavigation';
import Index from '../pages/Index';

import Documents from '../pages/Documents';
import NewDocument from '../pages/NewDocument';
import EditDocument from '../containers/EditDocument';
import ViewDocument from '../containers/ViewDocument';

import Shops from '../pages/Shops';
import NewShop from '../pages/NewShop';
import EditShop from '../containers/EditShop';
import ViewShop from '../containers/ViewShop';

import Shopping from '../pages/Shopping';

import Messages from '../pages/Messages';
import NewMessage from '../pages/NewMessage';
import EditMessage from '../containers/EditMessage';
import ViewMessage from '../containers/ViewMessage';

import Bookings from '../pages/Bookings';
import NewBooking from '../pages/NewBooking';
import EditBooking from '../containers/EditBooking';
import ViewBooking from '../containers/ViewBooking';

import Login from '../pages/Login';
import RecoverPassword from '../pages/RecoverPassword';
import ResetPassword from '../pages/ResetPassword';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';

const App = appProps => (
  <Router>
    <div className="App">
      <AppNavigation {...appProps} />
      <Grid>
        <Switch>
          <Route exact name="index" path="/" component={Index} />
          <Authenticated exact path="/documents" component={Documents} {...appProps} />
          <Authenticated exact path="/documents/new" component={NewDocument} {...appProps} />
          <Authenticated exact path="/documents/:_id" component={ViewDocument} {...appProps} />
          <Authenticated exact path="/documents/:_id/edit" component={EditDocument} {...appProps} />
          <Authenticated exact path="/shops" component={Shops} {...appProps} />
          <Authenticated exact path="/shops/new" component={NewShop} {...appProps} />
          <Authenticated exact path="/shops/:_id" component={ViewShop} {...appProps} />
          <Authenticated exact path="/shops/:_id/edit" component={EditShop} {...appProps} />
          <Authenticated exact path="/shopping" component={Shopping} {...appProps} />
          <Authenticated exact path="/messages" component={Messages} {...appProps} />
          <Authenticated exact path="/messages/new" component={NewMessage} {...appProps} />
          <Authenticated exact path="/messages/:_id" component={ViewMessage} {...appProps} />
          <Authenticated exact path="/messages/:_id/edit" component={EditMessage} {...appProps} />
          <Authenticated exact path="/bookings" component={Bookings} {...appProps} />
          <Authenticated exact path="/bookings/new" component={NewBooking} {...appProps} />
          <Authenticated exact path="/bookings/:_id" component={ViewBooking} {...appProps} />
          <Authenticated exact path="/bookings/:_id/edit" component={EditBooking} {...appProps} />
          <Public path="/signup" component={Signup} {...appProps} />
          <Public path="/login" component={Login} {...appProps} />
          <Route name="recover-password" path="/recover-password" component={RecoverPassword} />
          <Route name="reset-password" path="/reset-password/:token" component={ResetPassword} />
          <Route component={NotFound} />
        </Switch>
      </Grid>
    </div>
  </Router>
);

App.propTypes = {
  loggingIn: PropTypes.bool,
  authenticated: PropTypes.bool,
};

const composer = (props, onData) => {
  const loggingIn = Meteor.loggingIn();
  onData(null, {
    loggingIn,
    authenticated: !loggingIn && !!Meteor.userId(),
  });
};

export default composeWithTracker(composer)(App);
