import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import Reviews from './reviews';
import rateLimit from '../../modules/rate-limit.js';

export const upsertReview = new ValidatedMethod({
  name: 'reviews.upsert',

  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    title: { type: String, optional: true },
    star:{ type: String, optional: true },
    detail1: { type: String, optional: true },
    userId: { type: String, optional: true },
    detail2: { type: String, optional: true },
    date: { type: String, optional: true },
    shopId: { type: String, optional: true },
  }).validator(),
  run(review) {
    return Reviews.upsert({ _id: review._id }, { $set: review });
  },
});

export const removeReview = new ValidatedMethod({
  name: 'reviews.remove',

  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {

    Reviews.remove(_id);

  },
});

rateLimit({
  methods: [

    upsertReview,
    removeReview,

  ],
  limit: 5,
  timeRange: 1000,
});
