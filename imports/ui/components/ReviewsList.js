import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Alert,Row,Col ,Image} from 'react-bootstrap';

const handleNav = (history, _id) => {
  history.push(`/reviews/${_id}`);
};

const ReviewsList = ({ history, reviews }) => (
  reviews.length > 0 ? <ListGroup className="ReviewsList">
    {reviews.map(({ _id, title,detail1 ,userId,date,star}) => (
      <ListGroupItem key={ _id }>
        <Row>
          <Col xs={ 3 } md={1} sm={ 2 }>
            <div className="circle">{star}</div>
          </Col>
          <Col xs={ 9 } md={11} sm={ 10 }>
            <div className="JDT19">
              <div className="JDT20">Date:{date} User:{userId} </div>
              <b>{ title }</b><br/>
              { detail1 }<br/>
            </div>
          </Col>
        </Row>
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No reviews yet.</Alert>
);

ReviewsList.propTypes = {
  history: PropTypes.object,
  documents: PropTypes.array,
};

export default ReviewsList;
