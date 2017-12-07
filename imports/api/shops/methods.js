import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import Shops from './shops';
import rateLimit from '../../modules/rate-limit.js';

export const upsertShop = new ValidatedMethod({
  name: 'shops.upsert',

  validate: new SimpleSchema({
    _id: { type: String, optional: true },
   title: { type: String, optional: true },
   petType:{ type: String, optional: true },
   price: { type: String, optional: true },
   userId: { type: String, optional: true },
   tel: { type: String, optional: true },
   lat: { type: String, optional: true },
   long: { type: String, optional: true },
   pic1: { type: String, optional: true },
   pic2: { type: String, optional: true },
   pic3: { type: String, optional: true },

   detail2: { type: String, optional: true },
   date: { type: String, optional: true },
  }).validator(),
  run(shop) {
    return Shops.upsert({ _id: shop._id }, { $set: shop });
  },
});

export const removeShop = new ValidatedMethod({
  name: 'shops.remove',

  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {

    Shops.remove(_id);

  },
});

rateLimit({
  methods: [

    upsertShop,
    removeShop,

  ],
  limit: 5,
  timeRange: 1000,
});
