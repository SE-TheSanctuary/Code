import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import BookingsList from '../containers/BookingsList.js';

const Bookings = ({ history }) => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">My booking</h4>

        </div>
        <BookingsList history={history} />
      </Col>
    </Row>
  </div>
);

Bookings.propTypes = {
  history: PropTypes.object,
};

export default Bookings;
