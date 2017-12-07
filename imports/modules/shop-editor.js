/* eslint-disable no-undef */
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertShop } from '../api/shops/methods.js';
import './validation.js';

let component;
//
const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Shop updated!' : 'Shop added!';
  const upsert = {
    title: document.querySelector('[name="title"]').value.trim(),
    petType:document.querySelector('[name="petType"]').value.trim(),
    price: document.querySelector('[name="price"]').value.trim(),

    tel: document.querySelector('[name="tel"]').value.trim(),
    lat: document.querySelector('[name="lat"]').value.trim(),
    long: document.querySelector('[name="long"]').value.trim(),
    pic1: document.querySelector('[name="pic1"]').value.trim(),
    pic2: document.querySelector('[name="pic2"]').value.trim(),
    pic3: document.querySelector('[name="pic3"]').value.trim(),

    detail2: document.querySelector('[name="detail2"]').value.trim(),
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
      price: {
        required: true,
      },
      detail2: {
        required: true,
      },
      userId: {
        required: true,
      }, //here
      date: {
        required: true,
      },
      tel: {
        required: true,
      },
      lat: {
        required: true,
      },
      long: {
        required: true,
      },
      pic1: {
        required: true,
      },
      pic2: {
        required: true,
      },
      pic3: {
        required: true,
      },
      detail2: {
        required: true,
      },
    },
    messages: {
      title: {
        required: 'Need a title in here, Seuss.',
      },
      price: {
        required: 'This thneeds a body, please.',
      },
      tel: {
        required: 'This thneeds a body, please.',
      },
      lat: {
        required: 'This thneeds a body, please.',
      },
      long: {
        required: 'This thneeds a body, please.',
      },
      pic1: {
        required: 'This thneeds a body, please.',
      },
      pic2: {
        required: 'This thneeds a body, please.',
      },
      pic3: {
        required: 'This thneeds a body, please.',
      },
      detail2: {
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
