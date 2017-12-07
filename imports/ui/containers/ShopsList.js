import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Shops from '../../api/shops/shops.js';
import ShopsList from '../components/ShopsList.js';
import Loading from '../components/Loading.js';


const composer = (params, onData) => {
  //const email = document.querySelector('[name="emailAddress"]').value
  // filterKey="all"
  // console.log('filterKey in shoplist',filterKey);
  if (typeof filterKey !== 'undefined'){
    console.log(filterKey);
  }
  else{
    filterKey="all"
    console.log(filterKey);
  }
  if (typeof sortKey !== 'undefined'){
    console.log(sortKey);
  }
  else{
    sortKey="date"
    console.log(sortKey);
  }
  const subscription = Meteor.subscribe('shops.list');
  if (subscription.ready()) {
    let shops = Shops.find({petType:filterKey}, {sort: {sortKey: -1}}).fetch();
    if(filterKey=="all"){
       shops = Shops.find({}, {sort: {sortKey: -1}}).fetch();
    }
  onData(null, { shops });
  }
};
//

export default composeWithTracker(composer, Loading)(ShopsList);
