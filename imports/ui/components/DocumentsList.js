import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Alert,Row,Col ,Image} from 'react-bootstrap';

const handleNav = (history, _id) => {
  history.push(`/documents/${_id}`);
};
//
const DocumentsList = ({ history, documents }) => (
  documents.length > 0 ? <ListGroup className="DocumentsList">
    {documents.map(({ _id, title }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id) }>
        <div>
          <Row>
            <Col xs={ 2 } sm={ 1 }>
              <div>
                <Image src="/pet-icon.png" responsive />
              </div>
            </Col>
            <Col xs={ 10 } sm={ 11 }>
              <b>{ title }</b><br/>
              breed:<br/>
              age:<br/>
              weight:
            </Col>
          </Row>
        </div>
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No documents yet.</Alert>
);

DocumentsList.propTypes = {
  history: PropTypes.object,
  documents: PropTypes.array,
};

export default DocumentsList;
