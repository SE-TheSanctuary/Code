import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import MessageBoxsList from '../containers/MessageBoxsList.js';

const MessageBoxs = ({ history }) => (
  <div className="MessageBoxs">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">My MessageBox</h4>
        </div>
        <MessageBoxsList history={history} />
      </Col>
    </Row>
  </div>
);

MessageBoxs.propTypes = {
  history: PropTypes.object,
};

export default MessageBoxs;
