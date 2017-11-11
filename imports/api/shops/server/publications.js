import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Shops from '../shops';

Meteor.publish('shops.list', () => /shops.find());

Meteor.publish('shops.view', (_id) => {
  check(_id, String);
  return /shops.find(_id);
});
