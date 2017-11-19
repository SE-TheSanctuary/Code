import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Messages = new Mongo.Collection('Messages');
export default Messages;

Messages.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Messages.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Messages.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
  body: {
    type: String,
    label: 'The body of the document.',
  },
  userId: {
    type: String,
    label: 'The userId of the document.', //here
  },
  date: {
    type: String,
    label: 'The userId of the document.', //here
  },
  receiveId: {
    type: String,
    label: 'The userId of the document.', //here
  },
});

Messages.attachSchema(Messages.schema);

Factory.define('message', Messages, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
  userId: () => 'Factory userId',
  date: () => 'Factory creationDate', //here
  receiveId: () => 'Factory receiveId', //here
});
