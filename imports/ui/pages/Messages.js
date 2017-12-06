import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import MessagesList from '../containers/MessagesList.js';
import { upsertMessageBox } from '../../api/messageBoxs/methods.js';
import MessageBoxs from '../../api/messageBoxs/messageBoxs.js';
import { ButtonToolbar, ButtonGroup} from 'react-bootstrap';
import { composeWithTracker } from 'react-komposer';

const userRole = () => {
  const user = Meteor.user();
  const profile = user ? user.profile : '';
  return user ? `${profile.roles}` : '';
};

const handleSendMessage = (history) => {
  receiveId = ""
  console.log("send");
  console.log(history);
  var messageBoxId = history.location.pathname
  messageBoxId = messageBoxId.replace('/messageBoxs/','');
  console.log(messageBoxId);

  const subscription = Meteor.subscribe('messageBoxs.list');

  Tracker.autorun(function() {
    if (subscription.ready()) {
      //return array of object that have same userId
      const messageBoxs = MessageBoxs.find({_id:messageBoxId}).map(function (doc) {
        return doc;
      })
      console.log(messageBoxs);
      if(userRole() == 'customer'){
        receiveId = messageBoxs[0].shopOwner
        console.log(receiveId)
      }
      else{
        receiveId = messageBoxs[0].customer
        console.log(receiveId)
      }

      }
  });
};

const Messages = ({ history }) => (
  <div className="Messages">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">My Message</h4>
            <ButtonToolbar className="pull-right">
              <ButtonGroup bsSize="small">
                <Link to="/messages/new">
                  <Button
                    onClick={() => handleSendMessage(history)}
                    className="text-danger"
                  >send messages</Button>
                </Link>
              </ButtonGroup>
            </ButtonToolbar>
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
