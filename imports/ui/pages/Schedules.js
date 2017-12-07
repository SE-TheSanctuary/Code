import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import BookingsList from '../containers/SchedulesList.js';
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const Bookings = ({ history }) => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">My schedules</h4>

        </div>
        <p>Please type a day:</p>
        <DayPickerInput onDayChange={day => console.log(day)} />
        <BookingsList history={history} />
      </Col>
    </Row>
  </div>
);

Bookings.propTypes = {
  history: PropTypes.object,
};

export default Bookings;
