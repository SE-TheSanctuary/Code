import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import MessagesList from '../containers/MessagesList.js';

const Messages = ({ history }) => (
  <div className="Messages">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">My Message</h4>
          <Link to="/messages/new">
            <Button
              bsStyle="success"
              className="pull-right"
            >Add new message</Button>
          </Link>
        </div>
        <MessagesList history={history} />
      </Col>
    </Row>
  </div>
);

Messages.propTypes = {
  history: PropTypes.object,
};

export default Messages;
