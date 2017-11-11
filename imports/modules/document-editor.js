/* eslint-disable no-undef */
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertDocument } from '../api/documents/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Document updated!' : 'Document added!';
  const upsert = {
    title: document.querySelector('[name="title"]').value.trim(),
    body: document.querySelector('[name="body"]').value.trim(),
    breed:document.querySelector('[name="breed"]').value.trim(),
    //sex: document.querySelector('[name="sex"]').value.trim(), //here
    userId:Meteor.userId(),
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertDocument.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.documentEditorForm.reset();
      Bert.alert(confirmation, 'success');
      component.props.history.push(`/documents/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.documentEditorForm).validate({
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

export default function documentEditor(options) {
  component = options.component;
  validate();
}
