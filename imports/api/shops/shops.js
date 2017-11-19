import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Shops = new Mongo.Collection('Shops');
export default Shops;

Shops.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Shops.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Shops.schema = new SimpleSchema({
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
});

Shops.attachSchema(Shops.schema);

Factory.define('shop', Shops, {
  title: () => 'Factory Title',
  detail1: () => 'Factory detail1',
  detail2: () => 'Factory detail2',
  userId: () => 'Factory userId',
  date: () => 'Factory creationDate', //here
});
