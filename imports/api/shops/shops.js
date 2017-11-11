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
  body: {
    type: String,
    label: 'The body of the document.',
  },
  userId: {
    type: String,
    label: 'The userId of the document.', //here
  },
});

Shops.attachSchema(Shops.schema);

Factory.define('shop', Shops, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
  userId: () => 'Factory userId', //here
});
