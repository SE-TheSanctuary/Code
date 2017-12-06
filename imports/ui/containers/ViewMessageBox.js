import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import MessageBoxs from '../../api/messageBoxs/messageBoxs.js';
import ViewMessageBox from '../pages/ViewMessageBox.js';
import Loading from '../components/Loading.js';

const composer = ({ match }, onData) => {
  const messageBoxId = match.params._id;
  const subscription = Meteor.subscribe('messageBoxs.view', messageBoxId);

  if (subscription.ready()) {
    const doc = MessageBoxs.findOne(messageBoxId);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(ViewMessageBox);
