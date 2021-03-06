import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

const Documents = new Mongo.Collection('Documents');
export default Documents;

Documents.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Documents.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Documents.schema = new SimpleSchema({
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
  breed: {
    type: String,
    label: 'The breed of the pet.', //here
  },
  petType: {
    type: String,
    label: 'The type of the pet.', //here
  },
});

Documents.attachSchema(Documents.schema);

Factory.define('document', Documents, {
  title: () => 'Factory Title',
  body: () => 'Factory Body',
  userId: () => 'Factory userId', //here
  breed: () => 'Factory breed', //here
  petType: () => 'Factory breed', //here
});
