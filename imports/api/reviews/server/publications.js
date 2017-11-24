import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Reviews from '../reviews';

Meteor.publish('reviews.list', () => Reviews.find());

Meteor.publish('reviews.view', (_id) => {
  check(_id, String);
  return Reviews.find(_id);

});
