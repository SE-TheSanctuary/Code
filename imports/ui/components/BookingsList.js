import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Alert,Row,Col ,Image} from 'react-bootstrap';

const handleNav = (history, _id) => {
  history.push(`/bookings/${_id}`);
};

const BookingsList = ({ history, bookings }) => (
  bookings.length > 0 ? <ListGroup className="BookingsList">
    {bookings.map(({ _id, title,detail1 }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id) }>
        <Row>
          <Col xs={ 2 } sm={ 1 }>
            <Image src="/Booking-icon.png" responsive />
          </Col>
          <Col xs={ 10 } sm={ 11 }>
            <b>{ title }</b><br/>
            owner:{ detail1 }<br/>
            tel:<br/>
            location:
          </Col>
        </Row>
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No bookings yet.</Alert>
);

BookingsList.propTypes = {
  history: PropTypes.object,
  documents: PropTypes.array,
};

export default BookingsList;
