import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import MessageBoxs from '../messageBoxs';

Meteor.publish('messageBoxs.list', () => MessageBoxs.find());

Meteor.publish('messageBoxs.view', (_id) => {
  check(_id, String);
  return MessageBoxs.find(_id);

});
