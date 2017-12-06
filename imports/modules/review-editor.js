/* eslint-disable no-undef */
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertReview } from '../api/reviews/methods.js';
import './validation.js';

let component;
//
const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Review updated!' : 'Review added!';
  const upsert = {
    title: document.querySelector('[name="title"]').value.trim(),
    petType:document.querySelector('[name="petType"]').value.trim(),
    detail1: document.querySelector('[name="detail1"]').value.trim(),
    detail2: document.querySelector('[name="detail2"]').value.trim(),
    userId:Meteor.userId(),
    date: new Date().toISOString(),
    shopId: reviewId,
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertReview.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.reviewEditorForm.reset();
      Bert.alert(confirmation, 'success');
      component.props.history.push(`/reviews/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.reviewEditorForm).validate({
    rules: {
      title: {
        required: true,
      },
      detail1: {
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
      shopId: {
        required: true,
      },
    },
    messages: {
      title: {
        required: 'Need a title in here, Seuss.',
      },
      detail1: {
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
      shopId: {
        required: 'This thneeds a body, please.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function reviewEditor(options) {
  component = options.component;
  validate();
}
