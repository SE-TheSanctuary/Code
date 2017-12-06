import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Bookings from '../bookings';

Meteor.publish('bookings.list', () => Bookings.find());

Meteor.publish('bookings.view', (_id) => {
  check(_id, String);
  return Bookings.find(_id);

});
