import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import MessageBoxs from './messageBoxs';
import rateLimit from '../../modules/rate-limit.js';

export const upsertMessageBox = new ValidatedMethod({
  name: 'messageBoxs.upsert',

  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    customer: { type: String, optional: true },
    customerName: { type: String, optional: true },
    shopOwner: { type: String, optional: true },
    shopOwnerName: { type: String, optional: true },
    date: { type: String, optional: true },
    statusCustomer: { type: String, optional: true },
    statusShopOwner: { type: String, optional: true },
  }).validator(),
  run(messageBox) {
    return MessageBoxs.upsert({ _id: messageBox._id }, { $set: messageBox });
  },
});


export const removeMessageBox = new ValidatedMethod({
  name: 'messageBoxs.remove',

  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {

    MessageBoxs.remove(_id);

  },
});

rateLimit({
  methods: [

    upsertMessageBox,
    removeMessageBox,

  ],
  limit: 5,
  timeRange: 1000,
});
