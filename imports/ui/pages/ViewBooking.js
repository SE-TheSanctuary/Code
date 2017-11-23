import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeBooking } from '../../api/bookings/methods';
import NotFound from './NotFound';
import { Meteor } from 'meteor/meteor';
import Bookings from '../../api/bookings/bookings';

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

const handleAccept = (history,_id) => {
  console.log("Accept!!!!!");
  console.log(_id);
  Bookings.update({_id : _id},{$set:{status : "Accept"}});
  history.push('/schedules');
};

const handleDecline = (history,_id) => {
  console.log("decline!!!!!");
  console.log(_id);
  Bookings.update({_id : _id},{$set:{status : "Decline"}});
  history.push('/schedules');
};

const userID = () => {
  const user = Meteor.user();
  return user ? `${user._id}` : '';
};

const userRole = () => {
  const user = Meteor.user();
  const profile = user ? user.profile : '';
  return user ? `${profile.roles}` : '';
};

const ViewBooking = ({ doc, history }) => {
  console.log("ViewBooking");
  //console.log(doc.userId);
  //console.log(doc.status);
  return doc ? (
    userRole() == "customer" ?
      doc.status == "false" ?
        <div className="ViewBooking">
          <div className="page-header clearfix">
            <h4 className="pull-left">{ doc && doc.title }</h4>
            <ButtonToolbar className="pull-right">
              <ButtonGroup bsSize="small">
                <Button
                  onClick={() => handleRemove(history, doc._id)}
                  className="text-danger"
                >Cancle Booking</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
          bookingpName: { doc && doc.title }<br/>
          bookingOwnerId: { doc && doc.userId }<br/>
          bookingDetail1: { doc && doc.detail1 }<br/>
          bookingDetail2: { doc && doc.detail2 }<br/>
          bookingStatus: { doc && doc.status }
        </div>:
          doc.status == "Accept" ?
            <div className="ViewBooking">
              <div className="page-header clearfix">
                <h4 className="pull-left">{ doc && doc.title }</h4>
                <ButtonToolbar className="pull-right">
                  <ButtonGroup bsSize="small">

                  </ButtonGroup>
                </ButtonToolbar>
              </div>
              bookingpName: { doc && doc.title }<br/>
              bookingOwnerId: { doc && doc.userId }<br/>
              bookingDetail1: { doc && doc.detail1 }<br/>
              bookingDetail2: { doc && doc.detail2 }<br/>
              bookingStatus: { doc && doc.status }
            </div>:
            <div className="ViewBooking">
              <div className="page-header clearfix">
                <h4 className="pull-left">{ doc && doc.title }</h4>
                <ButtonToolbar className="pull-right">
                  <ButtonGroup bsSize="small">
                    <Button
                      onClick={() => handleRemove(history, doc._id)}
                      className="text-danger"
                    >Delete Booking</Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </div>
              bookingpName: { doc && doc.title }<br/>
              bookingOwnerId: { doc && doc.userId }<br/>
              bookingDetail1: { doc && doc.detail1 }<br/>
              bookingDetail2: { doc && doc.detail2 }<br/>
              bookingStatus: { doc && doc.status }
            </div>:
      doc.status == "false" ?
        <div className="ViewBooking">
          <div className="page-header clearfix">
            <h4 className="pull-left">{ doc && doc.title }</h4>
            <ButtonToolbar className="pull-right">
              <ButtonGroup bsSize="small">
                <Button onClick={() => handleAccept(history, doc._id)}
                  >Accept</Button>
                <Button onClick={() => handleAccept(history, doc._id)}
                  >Decline</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
          bookingpName: { doc && doc.title }<br/>
          bookingOwnerId: { doc && doc.userId }<br/>
          bookingDetail1: { doc && doc.detail1 }<br/>
          bookingDetail2: { doc && doc.detail2 }<br/>
          bookingStatus: { doc && doc.status }
        </div>:
        <div className="ViewBooking">
          <div className="page-header clearfix">
            <h4 className="pull-left">{ doc && doc.title }</h4>
            <ButtonToolbar className="pull-right">
              <ButtonGroup bsSize="small">
                <Button>Message</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>
          bookingpName: { doc && doc.title }<br/>
          bookingOwnerId: { doc && doc.userId }<br/>
          bookingDetail1: { doc && doc.detail1 }<br/>
          bookingDetail2: { doc && doc.detail2 }<br/>
          bookingStatus: { doc && doc.status }
        </div>
  ) : <NotFound />;
};

ViewBooking.propTypes = {
  doc: PropTypes.object,
  history: PropTypes.object,
  receiveId: PropTypes.object,
};

export default ViewBooking;
