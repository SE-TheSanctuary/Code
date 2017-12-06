import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Messages from '../../api/messages/messages.js';
import MessagesList from '../components/MessagesList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  console.log("messages filter");
  const subscription = Meteor.subscribe('messages.list');
  if (subscription.ready()) {
    //return array of object that have same userId
    const messages = Messages.find({receiveId:Meteor.userId()}).map(function (doc) {
      return doc;
    })
    console.log(messages);
    onData(null, { messages });
  }
};

export default composeWithTracker(composer, Loading)(MessagesList);
