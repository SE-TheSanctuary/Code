import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import Documents from '../../api/documents/documents.js';
import DocumentsList from '../components/DocumentsList.js';
import Loading from '../components/Loading.js';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('documents.list');
  if (subscription.ready()) {
    //return array of object that have same userId
    const documents = Documents.find({userId:Meteor.userId()}).map(function (doc) {
      return doc;
    })
    console.log(documents);
    onData(null, { documents });
  }
};

export default composeWithTracker(composer, Loading)(DocumentsList);
