import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import MessageBoxs from '../../api/messageBoxs/messageBoxs.js';
import MessageBoxsList from '../components/MessageBoxsList.js';
import Loading from '../components/Loading.js';

const userRole = () => {
  const user = Meteor.user();
  const profile = user ? user.profile : '';
  return user ? `${profile.roles}` : '';
};

const composer = (params, onData) => {
  console.log("messageBoxs filter");
  const subscription = Meteor.subscribe('messageBoxs.list');
  if (subscription.ready()) {
    //return array of object that have same userId
    if(userRole()=='customer'){
      const messageBoxs = MessageBoxs.find({customer:Meteor.userId()}).map(function (doc) {
        return doc;
      })
      console.log(messageBoxs);
      onData(null, { messageBoxs });
    }
    else{
      const messageBoxs = MessageBoxs.find({shopOwner:Meteor.userId()}).map(function (doc) {
        return doc;
      })
      console.log(Meteor.userId());
      onData(null, { messageBoxs });
    }
  }
};

export default composeWithTracker(composer, Loading)(MessageBoxsList);
