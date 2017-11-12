/* eslint-disable no-undef */
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertShop } from '../api/shops/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Shop updated!' : 'Shop added!';
  const upsert = {
    title: document.querySelector('[name="title"]').value.trim(),
    body: document.querySelector('[name="body"]').value.trim(),
    userId:Meteor.userId(),
    date: new Date().toISOString(),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertShop.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.shopEditorForm.reset();
      Bert.alert(confirmation, 'success');
      component.props.history.push(`/shops/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.shopEditorForm).validate({
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
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function shopEditor(options) {
  component = options.component;
  validate();
}
