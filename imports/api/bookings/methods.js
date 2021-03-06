import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import Bookings from './bookings';
import rateLimit from '../../modules/rate-limit.js';

export const upsertBooking = new ValidatedMethod({
  name: 'bookings.upsert',

  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    detail1: { type: String, optional: true },
    userId: { type: String, optional: true },
    detail2: { type: String, optional: true },
    date: { type: String, optional: true },

    startDate1: { type: String, optional: true },
    startDate2: { type: String, optional: true },
    startDate3: { type: String, optional: true },
    endDate1: { type: String, optional: true },
    endDate2: { type: String, optional: true },
    endDate3: { type: String, optional: true },

    receiveId: { type: String, optional: true },
    status: { type: String, optional: true },
    shopName: { type: String, optional: true },
    shopOwnerName: { type: String, optional: true },
    customerName: { type: String, optional: true },
    beginSelectday: { type: String, optional: true },
    lastSelectday: { type: String, optional: true },
  }).validator(),
  run(booking) {
    return Bookings.upsert({ _id: booking._id }, { $set: booking });
  },
});

export const removeBooking = new ValidatedMethod({
  name: 'bookings.remove',

  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {

    Bookings.remove(_id);

  },
});

rateLimit({
  methods: [

    upsertBooking,
    removeBooking,

  ],
  limit: 5,
  timeRange: 1000,
});
