import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Messages from '../messages';

Meteor.publish('messages.list', () => Messages.find());

Meteor.publish('messages.view', (_id) => {
  check(_id, String);
  return Messages.find(_id);

});
