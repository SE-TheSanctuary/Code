import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Reviews from '../../api/reviews/reviews.js';
import ViewReview from '../pages/ViewReview.js';
import Loading from '../components/Loading.js';

const composer = ({ match }, onData) => {
  const reviewId = match.params._id;
  const subscription = Meteor.subscribe('reviews.view', reviewId);

  if (subscription.ready()) {
    const doc = Reviews.findOne(reviewId);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(ViewReview);
