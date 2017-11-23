import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Bookings from '../../api/bookings/bookings.js';
import BookingsList from '../components/BookingsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('bookings.list');
  if (subscription.ready()) {
    //return array of object that have same userId
    const bookings = Bookings.find({receiveId:Meteor.userId(),status:"false"}).map(function (doc) {
      return doc;
    })
    console.log(bookings);
    onData(null, { bookings });
  }
};

export default composeWithTracker(composer, Loading)(BookingsList);
