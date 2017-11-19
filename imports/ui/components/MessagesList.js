import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Alert,Row,Col ,Image} from 'react-bootstrap';

const handleNav = (history, _id) => {
  history.push(`/messages/${_id}`);
};

const MessagesList = ({ history, documents }) => (
  messages.length > 0 ? <ListGroup className="MessagesList">
    {messages.map(({ _id, title }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id) }>
        <Row>
          <Col xs={ 2 } sm={ 1 }>
            <Image src="/pet-icon.png" responsive />
          </Col>
          <Col xs={ 10 } sm={ 11 }>
            <b>{ title }</b><br/>
            breed:<br/>
            age:<br/>
            weight:
          </Col>
        </Row>
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No messages yet.</Alert>
);

MessagesList.propTypes = {
  history: PropTypes.object,
  documents: PropTypes.array,
};

export default MessagesList;
