import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout();

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

const userRole = () => {
  const user = Meteor.user();
  const profile = user ? user.profile : '';
  return user ? `${profile.roles}` : '';
};

const AuthenticatedNavigation = () => (
  userRole() == 'shopOwner' ?
    <div>
      <Nav>
        <li>
          <NavLink to="/shops">My Shops</NavLink>
        </li>
        <li>
          <NavLink to="/shopping">Shops</NavLink>
        </li>
        <li>
          <NavLink to="/messageBoxs">MessageBox</NavLink>
        </li>
        <li>
          <NavLink to="/requests">Requests</NavLink>
        </li>
        <li>
          <NavLink to="/schedules">My Schedules</NavLink>
        </li>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
          <MenuItem eventKey={ 3.1 } onClick={ handleLogout }>Logout</MenuItem>
        </NavDropdown>
      </Nav>
    </div> :
    <div>
      <Nav>
        <li>
          <NavLink to="/documents">My Pets</NavLink>
        </li>
        <li>
          <NavLink to="/shopping">Shops</NavLink>
        </li>
        <li>
          <NavLink to="/messageBoxs">MessageBox</NavLink>
        </li>
        <li>
          <NavLink to="/bookings">My Booking</NavLink>
        </li>
      </Nav>
      <Nav pullRight>
        <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
          <MenuItem eventKey={ 3.1 } onClick={ handleLogout }>Logout</MenuItem>
        </NavDropdown>
      </Nav>
    </div>
);

export default AuthenticatedNavigation;
