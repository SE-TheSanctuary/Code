import React, { PropTypes } from 'react';
import BookingEditor from '../components/BookingEditor.js';

const NewBooking = ({ history }) => (
  <div className="NewBooking">
    <h4 className="page-header">New Booking</h4>
    <BookingEditor history={history} />
  </div>
);

NewBooking.propTypes = {
  history: PropTypes.object,
};

export default NewBooking;
