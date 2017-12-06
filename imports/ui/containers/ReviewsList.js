import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Reviews from '../../api/reviews/reviews.js';
import ReviewsList from '../components/ReviewsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('reviews.list');
  if (subscription.ready()) {
    //return array of object that have same userId
    const reviews = Reviews.find({userId:Meteor.userId()}).map(function (doc) {
      return doc;
    })
    console.log(reviews);
    onData(null, { reviews });
  }
};

export default composeWithTracker(composer, Loading)(ReviewsList);
