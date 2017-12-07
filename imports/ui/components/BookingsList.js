import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Alert,Row,Col ,Image} from 'react-bootstrap';

const handleNav = (history, _id) => {
  history.push(`/bookings/${_id}`);
};

const BookingsList = ({ history, bookings }) => (
  bookings.length > 0 ? <ListGroup className="BookingsList">
    {bookings.map(({ _id, title,detail1 ,startDate1,startDate2,endDate1,endDate2,userId,}) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id) }>
        <Row>
          <Col xs={ 3 } md={1} sm={ 2 }>
            <div className="JDT21">
                <p>Start date</p>
                {startDate1}/{startDate2}
            </div>
          </Col>
          <Col xs={ 3 } md={1} sm={ 2 }>
            <div className="JDT21">
                <p>End date</p>
                {endDate1}/{endDate2}
            </div>
          </Col>
          <Col xs={ 6 } md={1} sm={ 8 }>
            <div className="JDT22">
              <div className="JDT20">User:{userId} </div>
              <b>Booking:{ title }</b><br/>
              Detail:{ detail1 }<br/>
            </div>
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
