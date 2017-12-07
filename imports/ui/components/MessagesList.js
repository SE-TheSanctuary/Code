import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Alert,Row,Col ,Image} from 'react-bootstrap';
import Messages from '../../api/messages/messages';

const handleNav = (history, _id) => {
  console.log(_id);
  Messages.update({_id : _id},{$set:{status : "read"}});
  history.push(`/messages/${_id}`);
};

const MessagesList = ({ history, messages }) => (
  messages.length > 0 ? <ListGroup className="MessagesList">
    {messages.map(({ _id, title, userId }) => (
      userId == Meteor.userId() ?
        <ListGroupItem key={ _id } >
          <Row>
            <Col xs={ 2 } sm={ 1 }>
              <Image src="/message-icon.png" responsive />
            </Col>
            <Col xs={ 10 } sm={ 11 }>
              <b>{ title }</b><br/>
              breed:<br/>
              age:<br/>
              weight:
            </Col>
          </Row>
        </ListGroupItem>:
        <ListGroupItem key={ _id } >
          <Row>
            <Col xs={ 10 } sm={ 2 } smOffset={8}>
              <b>{ title }</b><br/>
              breed:<br/>
              age:<br/>
              weight:
            </Col>
            <Col xs={ 2 } sm={ 2 }>
              <Image src="/message-icon.png" responsive />
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
