import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Shops from '../../api/shops/shops.js';
import ShopsList from '../components/ShopsList.js';
import Loading from '../components/Loading.js';


const composer = (params, onData) => {
  //const email = document.querySelector('[name="emailAddress"]').value
  // filterKey="all"
  // console.log('filterKey in shoplist',filterKey);
  var sort = new ReactiveVar({});

  if (typeof filterKey !== 'undefined'){
    console.log(filterKey);
  }
  else{
    filterKey="all"
  }

  if (typeof sortKey !== 'undefined'){
    console.log(sortKey);
    if(sortKey=='date')
    {sort.set({ date: 1 });}
    else if(sortKey=='price')
    {sort.set({ price: 1 });}
  }
  else{

  }

  const subscription = Meteor.subscribe('shops.list');

  if (subscription.ready()) {
    let shops = Shops.find({petType:filterKey}, {sort:sort.get()}).fetch();
    if(filterKey=="all"){
       shops = Shops.find({}, {sort:sort.get()}).fetch();
    }
    console.log(shops)
    onData(null, { shops });
  }
};
//

export default composeWithTracker(composer, Loading)(ShopsList);
