/* eslint-disable no-undef */
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertBooking } from '../api/bookings/methods.js';
import './validation.js';

let component;
//
const userName = () => {
  const user = Meteor.user();
  const profile = user ? user.profile : '';
  const name = profile ? profile.name : '';
  return user ? `${name.first}` : '';
};

const handleUpsert = () => {
  const { doc } = component.props;
  const confirmation = doc && doc._id ? 'Booking updated!' : 'Booking added!';
  const upsert = {
    title: document.querySelector('[name="title"]').value.trim(),
    detail1: document.querySelector('[name="detail1"]').value.trim(),
    detail2: document.querySelector('[name="detail2"]').value.trim(),
    userId:Meteor.userId(),


    startDate1: document.querySelector('[name="startDate1"]').value.trim(),
    startDate2: document.querySelector('[name="startDate2"]').value.trim(),
    startDate3: document.querySelector('[name="startDate3"]').value.trim(),
    endDate1: document.querySelector('[name="endDate1"]').value.trim(),
    endDate2: document.querySelector('[name="endDate2"]').value.trim(),
    endDate3: document.querySelector('[name="endDate3"]').value.trim(),

    date: new Date().toISOString(),
    receiveId: receiveId,
    status: "false",
    shopName: receiveShopName,
    shopOwnerName: receiveName,
    customerName: userName(),
    beginSelectday: "false",
    lastSelectday: "false",
  };

  if (doc && doc._id) upsert._id = doc._id;

  upsertBooking.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.bookingEditorForm.reset();
      Bert.alert(confirmation, 'success');
      component.props.history.push(`/bookings/${response.insertedId || doc._id}`);
    }
  });
};

const validate = () => {
  $(component.bookingEditorForm).validate({
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
      receiveId: {
        required: true,
      },
      status: {
        required: true,
      },
      shopName: {
        required: true,
      },
      shopOwnerName: {
        required: true,
      },
      customerName: {
        required: true,
      },
      beginSelectday: {
        required: true,
      },
      lastSelectday: {
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
      receiveId: {
        required: 'This thneeds a body, please.',
      },
      status: {
        required: 'This thneeds a body, please.',
      },
      shopName: {
        required: 'This thneeds a body, please.',
      },
      shopOwnerName: {
        required: 'This thneeds a body, please.',
      },
      customerName: {
        required: 'This thneeds a body, please.',
      },
      beginSelectday: {
        required: 'This thneeds a body, please.',
      },
      lastSelectday: {
        required: 'This thneeds a body, please.',
      },
    },
    submitHandler() { handleUpsert(); },
  });
};

export default function bookingEditor(options) {
  component = options.component;
  validate();
}
