import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const MessageBoxs = new Mongo.Collection('MessageBoxs');
export default MessageBoxs;

MessageBoxs.allow({
  insert: () => true,
  update: () => true,
  remove: () => false,
});

MessageBoxs.deny({
  insert: () => false,
  update: () => false,
  remove: () => true,
});

MessageBoxs.schema = new SimpleSchema({
  customer: {
    type: String,
    label: 'The title of the document.',
  },
  shopOwner: {
    type: String,
    label: 'The body of the document.',
  },
  date: {
    type: String,
    label: 'The userId of the document.', //here
  },
  statusCustomer: {
    type: String,
    label: 'The userId of the document.', //here
  },
  statusShopOwner: {
    type: String,
    label: 'The userId of the document.', //here
  },
});

MessageBoxs.attachSchema(MessageBoxs.schema);

Factory.define('messageBox', MessageBoxs, {
  customer: () => 'Factory Customer',
  shopOwner: () => 'Factory ShopOwner',
  date: () => 'Factory creationDate', //here
  status: () => 'Factory status', //here
});
