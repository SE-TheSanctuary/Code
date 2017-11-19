import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';


const Documents = ({ history }) => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">My Pet</h4>
          <Link to="/documents/new">
            <Button
              bsStyle="success"
              className="pull-right"
            >Add new pet</Button>
          </Link>
        </div>
        <DocumentsList history={history} />
      </Col>
    </Row>
  </div>
);

Documents.propTypes = {
  history: PropTypes.object,
};

export default Documents;
