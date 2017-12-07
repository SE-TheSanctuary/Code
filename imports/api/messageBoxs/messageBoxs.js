import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const MessageBoxs = new Mongo.Collection('MessageBoxs');
export default MessageBoxs;

MessageBoxs.allow({
  insert: () => false,
  update: () => true,
  remove: () => false,
});

MessageBoxs.deny({
  insert: () => true,
  update: () => false,
  remove: () => true,
});

MessageBoxs.schema = new SimpleSchema({
  customer: {
    type: String,
    label: 'The title of the document.',
  },
  customerName: {
    type: String,
    label: 'The title of the document.',
  },
  shopOwner: {
    type: String,
    label: 'The body of the document.',
  },
  shopOwnerName: {
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
  customerName: () => 'Factory CustomerName',
  shopOwner: () => 'Factory ShopOwner',
  shopOwnerName: () => 'Factory ShopOwnerName',
  date: () => 'Factory creationDate', //here
  status: () => 'Factory status', //here
});
