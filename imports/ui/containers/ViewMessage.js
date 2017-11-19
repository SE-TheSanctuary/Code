import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Messages from '../../api/messages/messages.js';
import ViewMessage from '../pages/ViewMessage.js';
import Loading from '../components/Loading.js';

const composer = ({ match }, onData) => {
  const messageId = match.params._id;
  const subscription = Meteor.subscribe('messages.view', messageId);

  if (subscription.ready()) {
    const doc = Messages.findOne(messageId);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(ViewMessage);
