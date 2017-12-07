import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Reviews = new Mongo.Collection('Reviews');
export default Reviews;

Reviews.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Reviews.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Reviews.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the document.',
  },
  star: {
    type: String,
    label: 'The type of the pet.', //here
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
  shopId: {
    type: String,
    label: 'The userId of the document.', //here
  },
});

Reviews.attachSchema(Reviews.schema);

Factory.define('review', Reviews, {
  title: () => 'Factory Title',
  star: () => 'Factory star', //here
  detail1: () => 'Factory detail1',
  detail2: () => 'Factory detail2',
  userId: () => 'Factory userId',
  date: () => 'Factory creationDate', //here
  shopId: () => 'Factory receiveId',
});
