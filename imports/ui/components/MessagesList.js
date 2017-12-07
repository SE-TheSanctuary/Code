import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Alert,Row,Col ,Image} from 'react-bootstrap';
import MessageBoxs from '../../api/messageBoxs/messageBoxs';

const userRole = () => {
  const user = Meteor.user();
  const profile = user ? user.profile : '';
  return user ? `${profile.roles}` : '';
};

const handleNav = (history, _id) => {
  console.log(_id);
  history.push(`/messages/${_id}`);
};

const UserId = (userId) => {
  console.log(userId.userId);
  return userId.userId;
};

const MessagesList = ({ history, messages }) => (
  messages.length > 0 ? <ListGroup className="MessagesList">
    {messages.map(({ _id, title, userId, body }) => (
      UserId({ userId }) == Meteor.user()._id ?
        <ListGroupItem key={ _id } >
          <Row>
            <Col xs={ 2 } sm={ 1 }>
              <Image src="/message1-icon.png" responsive />
            </Col>
            <Col xs={ 10 } sm={ 11 }>
              <b>{ title }</b><br/>
              { body }<br/>
            </Col>
          </Row>
        </ListGroupItem>:
        <ListGroupItem key={ _id } >
          <Row>
            <Col xs={ 2 } sm={ 1 }>
              <Image src="/message2-icon.png" responsive />
            </Col>
            <Col xs={ 10 } sm={ 11 }>
              <b>{ title }</b><br/>
              { body }<br/>
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
