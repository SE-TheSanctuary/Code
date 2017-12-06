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
          <NavLink to="/shops">Shops</NavLink>
        </li>
        <li>
          <NavLink to="/shopping">Go Shopping</NavLink>
        </li>
        <li>
          <NavLink to="/messages">My message</NavLink>
        </li>
        <li>
          <NavLink to="/requests">My requests</NavLink>
        </li>
        <li>
          <NavLink to="/schedules">My schedules</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">reviews</NavLink>
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
          <NavLink to="/shopping">Go Shopping</NavLink>
        </li>
        <li>
          <NavLink to="/messages">My message</NavLink>
        </li>
        <li>
          <NavLink to="/bookings">My booking</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">reviews</NavLink>
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
