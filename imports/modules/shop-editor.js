/* eslint-disable no-undef */
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertShop } from '../api/shops/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Shop updated!' : 'Shop added!';
  const upsert = {
    title: shop.querySelector('[name="title"]').value.trim(),
    body: shop.querySelector('[name="body"]').value.trim(),
    userId:Meteor.userId(),
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
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function shopEditor(options) {
  component = options.component;
  validate();
}
