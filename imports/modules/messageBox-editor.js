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
  if(userRole() == 'customer'){
    const upsert = {
      customer: Meteor.userId(),
      customerName: "false",
      shopOwner: receiveId,
      shopOwnerName: "false",
      date: new Date().toISOString(),
      statusCustomer: "read",
      statusShopOwner: "false",
    };
  } else {
    const upsert = {
      customer: receiveId,
      customerName: "false",
      shopOwner: Meteor.userId(),
      shopOwnerName: "false",
      date: new Date().toISOString(),
      statusCustomer: "false",
      statusShopOwner: "read",
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
      customerName: {
        required: true,
      },
      shopOwner: {
        required: true,
      },//here
      shopOwnerName: {
        required: true,
      },//here
      date: {
        required: true,
      },
      statusCustomer: {
        required: true,
      },
      statusShopOwner: {
        required: true,
      },
    },
    messageBoxs: {
      customer: {
        required: 'Need a title in here, Seuss.',
      },
      customerName: {
        required: 'Need a title in here, Seuss.',
      },
      shopOwner: {
        required: 'This thneeds a body, please.',
      },
      shopOwnerName: {
        required: 'This thneeds a body, please.',
      },
      date: {
        required: 'This thneeds a body, please.',
      },
      statusCustomer: {
        required: 'This thneeds a body, please.',
      },
      statusShopOwner: {
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
