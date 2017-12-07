import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Alert,Row,Col ,Image} from 'react-bootstrap';

const handleNav = (history, _id) => {
  history.push(`/bookings/${_id}`);
};

const Status = (status) => {
  console.log(status.status);
  return status.status;
};

const BookingsList = ({ history, bookings }) => (
  bookings.length > 0 ? <ListGroup className="BookingsList">
    {bookings.map(({ _id, shopName, customerName, detail2 ,startDate1,startDate2,endDate1,endDate2,userId,status,}) => (
      Status({ status }) == 'false' ?
          <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id) }>
            <Row>
              <Col xs={ 2 } sm={ 1 }>
                <div>
                  <Image src="/Booking1-icon.png" responsive />
                </div>
              </Col>
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
                  <div className="JDT20">Shop:{shopName} </div>
                  <b>Name:{ customerName }</b><br/>
                  Detail:{ detail2 }<br/>
                </div>
              </Col>
            </Row>
          </ListGroupItem>:
      Status({ status }) == 'Accept' ?
          <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id) }>
            <Row>
              <Col xs={ 2 } sm={ 1 }>
                <div>
                  <Image src="/Booking2-icon.png" responsive />
                </div>
              </Col>
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
                  <div className="JDT20">Shop:{shopName} </div>
                  <b>Name:{ customerName }</b><br/>
                  Detail:{ detail2 }<br/>
                </div>
              </Col>
            </Row>
          </ListGroupItem>:
          <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id) }>
            <Row>
              <Col xs={ 2 } sm={ 1 }>
                <div>
                  <Image src="/Booking3-icon.png" responsive />
                </div>
              </Col>
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
                  <div className="JDT20">Shop:{shopName} </div>
                  <b>Name:{ customerName }</b><br/>
                  Detail:{ detail2 }<br/>
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
