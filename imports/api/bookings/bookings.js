import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Bookings = new Mongo.Collection('Bookings');
export default Bookings;

Bookings.allow({
  insert: () => false,
  update: () => true,
  remove: () => false,
});

Bookings.deny({
  insert: () => true,
  update: () => false,
  remove: () => true,
});

Bookings.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
  detail1: {
    type: String,
    label: 'The detail1 of the document.',
  },
  detail2: {
    type: String,
    label: 'The detail2 of the document.',
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
  status: {
    type: String,
    label: 'The userId of the document.', //here
  },

  startDate1: {
    type: String,
    label: 'The userId of the document.', //here
  },
  startDate2: {
    type: String,
    label: 'The userId of the document.', //here
  },
  startDate3: {
    type: String,
    label: 'The userId of the document.', //here
  },
  endDate1: {
    type: String,
    label: 'The userId of the document.', //here
  },
  endDate2: {
    type: String,
    label: 'The userId of the document.', //here
  },
  endDate3: {
    type: String,
    label: 'The userId of the document.', //here
  },

  shopName: {
    type: String,
    label: 'The userId of the document.', //here
  },
  shopOwnerName: {
    type: String,
    label: 'The userId of the document.', //here
  },
  customerName: {
    type: String,
    label: 'The userId of the document.', //here
  },
  beginSelectday: {
    type: String,
    label: 'The userId of the document.', //here
  },
  lastSelectday: {
    type: String,
    label: 'The userId of the document.', //here
  },
});

Bookings.attachSchema(Bookings.schema);

Factory.define('booking', Bookings, {
  title: () => 'Factory Title',
  detail1: () => 'Factory detail1',
  detail2: () => 'Factory detail2',
  userId: () => 'Factory userId',
  date: () => 'Factory creationDate', //here

startDate1: () => 'Factory creationDate', //here
startDate2: () => 'Factory creationDate', //here
startDate3: () => 'Factory creationDate', //here
endDate1: () => 'Factory creationDate', //here
endDate2: () => 'Factory creationDate', //here
endDate3: () => 'Factory creationDate', //here

  receiveId: () => 'Factory receiveId', //here
  status: () => 'Factory status', //here
  shopName: () => 'Factory status', //here
  shopOwnerName: () => 'Factory status', //here
  customerName: () => 'Factory status', //here
  beginSelectday: () => 'Factory status', //here
  lastSelectday: () => 'Factory status', //here
});
