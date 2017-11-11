import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

const Shops = ({ history }) => (
  <div className="Shops">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Shops</h4>
        </div>
      </Col>
    </Row>
  </div>
);

Shops.propTypes = {
  history: PropTypes.object,
};

export default Shops;
