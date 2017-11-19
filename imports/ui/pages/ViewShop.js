import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeShop } from '../../api/shops/methods';
import NotFound from './NotFound';
import { Meteor } from 'meteor/meteor';
import MessagesList from '../containers/MessagesList.js';
import { Link } from 'react-router-dom';


const handleEdit = (history, _id) => {
  history.push(`/shops/${_id}/edit`);
};

const handleRemove = (history, _id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeShop.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Shop deleted!', 'success');
        history.push('/shops');
      }
    });
  }
};

const handleSendMessage = (userId) => {
  console.log("send");
  console.log(userId);
  receiveId = userId;
  console.log(receiveId);
};

const userID = () => {
  const user = Meteor.user();
  return user ? `${user._id}` : '';
};

const ViewShop = ({ doc, history }) => {
  console.log("ViewShop");
  console.log(doc.userId);
  return doc ? (
    userID() == doc.userId ?
      <div className="ViewShop">
        <div className="page-header clearfix">
          <h4 className="pull-left">{ doc && doc.title }</h4>
          <ButtonToolbar className="pull-right">
            <ButtonGroup bsSize="small">
              <Button
                onClick={() => handleEdit(history, doc._id)}
              >Edit</Button>
              <Button
                onClick={() => handleRemove(history, doc._id)}
                className="text-danger"
              >Delete</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
        shopName: { doc && doc.title }<br/>
        shopOwnerId: { doc && doc.userId }<br/>
        shopDetail1: { doc && doc.detail1 }<br/>
        shopDetail2: { doc && doc.detail2 }
      </div> :
      <div className="ViewShop">
        <div className="page-header clearfix">
        <h4 className="pull-left">My Message</h4>
        <Link to="/messages/new">
          <Button
            onClick={() => handleSendMessage(doc.userId)}
            bsStyle="success"
            className="pull-right"
          >send message</Button>
        </Link>
        </div>
        shopName: { doc && doc.title }<br/>
        shopOwnerId: { doc && doc.userId }<br/>
        shopDetail1: { doc && doc.detail1 }<br/>
        shopDetail2: { doc && doc.detail2 }
      </div>
  ) : <NotFound />;
};

ViewShop.propTypes = {
  doc: PropTypes.object,
  history: PropTypes.object,
  receiveId: PropTypes.object,
};

export default ViewShop;
