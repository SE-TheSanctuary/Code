import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Bookings from '../../api/bookings/bookings.js';
import EditBooking from '../pages/EditBooking.js';
import Loading from '../components/Loading.js';

const composer = ({ match }, onData) => {
  const bookingId = match.params._id;
  const subscription = Meteor.subscribe('bookings.view', bookingId);

  if (subscription.ready()) {
    const doc = Bookings.findOne(bookingId);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(EditBooking);
