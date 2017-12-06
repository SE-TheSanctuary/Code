/* eslint-disable no-undef */
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertMessage } from '../api/messages/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Message updated!' : 'Message added!';
  const upsert = {
    title: document.querySelector('[name="title"]').value.trim(),
    body: document.querySelector('[name="body"]').value.trim(),
    userId:Meteor.userId(),
    date: new Date().toISOString(),
    receiveId: receiveId,
    status: "false",
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertMessage.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.messageEditorForm.reset();
      Bert.alert(confirmation, 'success');
      component.props.history.push(`/messages/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.messageEditorForm).validate({
    rules: {
      title: {
        required: true,
      },
      body: {
        required: true,
      },
      userId: {
        required: true,
      }, //here
      date: {
        required: true,
      },
      receiveId: {
        required: true,
      },
      status: {
        required: true,
      },
    },
    messages: {
      title: {
        required: 'Need a title in here, Seuss.',
      },
      body: {
        required: 'This thneeds a body, please.',
      },
      userId: {
        required: 'This thneeds a body, please.',
      }, //here
      date: {
        required: 'This thneeds a body, please.',
      },
      receiveId: {
        required: 'This thneeds a body, please.',
      },
      status: {
        required: 'This thneeds a body, please.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function messageEditor(options) {
  component = options.component;
  validate();
}
