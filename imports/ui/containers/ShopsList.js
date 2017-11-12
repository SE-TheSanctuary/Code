import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Shops from '../../api/shops/shops.js';
import ShopsList from '../components/ShopsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('shops.list');
  if (subscription.ready()) {
    //return array of object that have same userId
    const shops = Shops.find({}, {sort: {date: -1}}).fetch();
    console.log(shops);
    onData(null, { shops });
  }
};

export default composeWithTracker(composer, Loading)(ShopsList);
