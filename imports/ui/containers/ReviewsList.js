import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Reviews from '../../api/reviews/reviews.js';
import ReviewsList from '../components/ReviewsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('reviews.list');
  if (subscription.ready()) {
    //return array of object that have same userId

    var str = params.history.location.pathname;
    var res = str.substring(7);
    console.log("substring"+res);

    const reviews = Reviews.find({shopId:res}, {sort: {date: -1}}).map(function (doc) {
      return doc;
    })
    console.log(params.history.location.pathname);
    onData(null, { reviews });
  }
};

export default composeWithTracker(composer, Loading)(ReviewsList);
