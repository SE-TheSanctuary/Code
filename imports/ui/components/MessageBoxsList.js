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
  if(userRole() == 'customer'){
    MessageBoxs.update({_id : _id},{$set:{statusCustomer : "read"}});
  }
  else{
    MessageBoxs.update({_id : _id},{$set:{statusShopOwner : "read"}});
  }
  history.push(`/messageBoxs/${_id}`);
};

const MessageBoxsList = ({ history, messageBoxs }) => (
  messageBoxs.length > 0 ? <ListGroup className="MessageBoxsList">
    {messageBoxs.map(({ _id, title }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id) }>
        <Row>
          <Col xs={ 2 } sm={ 1 }>
            <Image src="/messageBox-icon.png" responsive />
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
  <Alert bsStyle="warning">No messagesBox yet.</Alert>
);

MessageBoxsList.propTypes = {
  history: PropTypes.object,
  documents: PropTypes.array,
};

export default MessageBoxsList;
