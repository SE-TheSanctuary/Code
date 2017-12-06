import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import ReviewsList from '../containers/ReviewsList.js';

const Reviews = ({ history }) => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Review</h4>
          <Link to="/Reviews/new">
            <Button
              bsStyle="success"
              className="pull-right"
            >Add new Review</Button>
          </Link>
        </div>
        <ReviewsList history={history} />
      </Col>
    </Row>
  </div>
);

Reviews.propTypes = {
  history: PropTypes.object,
};

export default Reviews;
