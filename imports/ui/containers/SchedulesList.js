import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Bookings from '../../api/bookings/bookings.js';
import BookingsList from '../components/BookingsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('bookings.list');
  if (subscription.ready()) {
    //return array of object that have same userId

    if (typeof monthKey !== 'undefined'){
      console.log(monthKey);
    }
    else{
      monthKey="all";
    }

    if (typeof yearKey !== 'undefined'){
      console.log(yearKey);
    }
    else{
      yearKey="all";
    }


    // const bookings = Bookings.find({receiveId:Meteor.userId(),status:"Accept",}, {sort: {date: -1}}).map(function (doc) {
    // return doc;})
    //
    //
    // if (typeof monthKey !== 'undefined' && typeof yearKey !== 'undefined'){
    //     const bookings = Bookings.find({receiveId:Meteor.userId(),status:"Accept",startDate2:monthKey,}, {sort: {date: -1}}).map(function (doc) {
    //       return doc;
    //     })
    // }
    let bookings = Bookings.find({receiveId:Meteor.userId(),status:"Accept",startDate2:monthKey,}, {sort: {startDate1: -1}}).fetch();
    if(monthKey=="all"){
       bookings = Bookings.find({receiveId:Meteor.userId(),status:"Accept",}, {sort: {date: -1}}).fetch();
    }

    console.log(bookings);
    onData(null, { bookings });
  }
};

export default composeWithTracker(composer, Loading)(BookingsList);
