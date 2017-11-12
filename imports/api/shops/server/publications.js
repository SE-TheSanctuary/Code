import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Shops from '../shops';

Meteor.publish('shops.list', () => Shops.find());

Meteor.publish('shops.view', (_id) => {
  check(_id, String);
  return Shops.find(_id);

});
