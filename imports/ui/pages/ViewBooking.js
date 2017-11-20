import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeBooking } from '../../api/bookings/methods';
import NotFound from './NotFound';
import { Meteor } from 'meteor/meteor';


const handleEdit = (history, _id) => {
  history.push(`/bookings/${_id}/edit`);
};

const handleRemove = (history, _id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeBooking.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Booking deleted!', 'success');
        history.push('/bookings');
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

const ViewBooking = ({ doc, history }) => {
  console.log("ViewBooking");
  console.log(doc.userId);
  return doc ? (
      <div className="ViewBooking">
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
        bookingpName: { doc && doc.title }<br/>
        bookingOwnerId: { doc && doc.userId }<br/>
        bookingDetail1: { doc && doc.detail1 }<br/>
        bookingDetail2: { doc && doc.detail2 }
      </div>
  ) : <NotFound />;
};

ViewBooking.propTypes = {
  doc: PropTypes.object,
  history: PropTypes.object,
  receiveId: PropTypes.object,
};

export default ViewBooking;
