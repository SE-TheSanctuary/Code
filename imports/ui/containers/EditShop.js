import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Shops from '../../api/shops/shops.js';
import EditShop from '../pages/EditShop.js';
import Loading from '../components/Loading.js';

const composer = ({ match }, onData) => {
  const shopId = match.params._id;
  const subscription = Meteor.subscribe('shops.view', shopId);

  if (subscription.ready()) {
    const doc = Shops.findOne(shopId);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(EditShop);
