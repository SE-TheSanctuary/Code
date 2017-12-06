import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import Messages from './messages';
import rateLimit from '../../modules/rate-limit.js';

export const upsertMessage = new ValidatedMethod({
  name: 'messages.upsert',

  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    body: { type: String, optional: true },
    userId: { type: String, optional: true },
    date: { type: String, optional: true },
    receiveId: { type: String, optional: true },
    status: { type: String, optional: true },
  }).validator(),
  run(message) {
    return Messages.upsert({ _id: message._id }, { $set: message });
  },
});

export const removeMessage = new ValidatedMethod({
  name: 'messages.remove',

  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {

    Messages.remove(_id);

  },
});

rateLimit({
  methods: [

    upsertMessage,
    removeMessage,

  ],
  limit: 5,
  timeRange: 1000,
});
