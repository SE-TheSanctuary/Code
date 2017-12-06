/* eslint-disable no-undef */
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertMessageBox } from '../api/messageBoxs/methods.js';
import './validation.js';

let component;

const userRole = () => {
  const user = Meteor.user();
  const profile = user ? user.profile : '';
  return user ? `${profile.roles}` : '';
};

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'MessageBox updated!' : 'MessageBox added!';
  if(userRole == 'customer'){
    const upsert = {
      customer: Meteor.userId(),
      shopOwner: receiveId,
      date: new Date().toISOString(),
      status: "false",
    };
  } else {
    const upsert = {
      customer: receiveId,
      shopOwner: Meteor.userId(),
      date: new Date().toISOString(),
      status: "false",
    };
  }


  if (doc && doc._id) upsert._id = doc._id;

  upsertMessageBox.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.messageBoxEditorForm.reset();
      Bert.alert(confirmation, 'success');
      component.props.history.push(`/messageBoxs/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.messageBoxEditorForm).validate({
    rules: {
      customer: {
        required: true,
      },
      shopOwner: {
        required: true,
      },//here
      date: {
        required: true,
      },
      status: {
        required: true,
      },
    },
    messageBoxs: {
      customer: {
        required: 'Need a title in here, Seuss.',
      },
      shopOwner: {
        required: 'This thneeds a body, please.',
      },
      date: {
        required: 'This thneeds a body, please.',
      },
      status: {
        required: 'This thneeds a body, please.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function messageBoxEditor(options) {
  component = options.component;
  validate();
}
