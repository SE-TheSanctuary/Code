import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import MyShopsList from '../containers/MyShopsList.js';

const Shops = ({ history }) => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">My shop</h4>
          <Link to="/shops/new">
            <Button
              bsStyle="success"
              className="pull-right"
            >Add new shop</Button>
          </Link>
        </div>
        <MyShopsList history={history} />
      </Col>
    </Row>
  </div>
);

Shops.propTypes = {
  history: PropTypes.object,
};

export default Shops;
