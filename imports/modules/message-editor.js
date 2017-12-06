/* eslint-disable no-undef */
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertMessage } from '../api/messages/methods.js';
import { upsertMessageBox } from '../api/messageBoxs/methods.js';
import MessageBoxs from '../api/messageBoxs/messageBoxs.js';
import MessageBoxsList from '../ui/containers/MessageBoxsList.js';
import { composeWithTracker } from 'react-komposer';

import './validation.js';

let component;

const userRole = () => {
  const user = Meteor.user();
  const profile = user ? user.profile : '';
  return user ? `${profile.roles}` : '';
};


const handleUpsert = () => {
  var chk = "false";
  messageBoxId = "";
  const upsertBox = {
    customer: "false",
    shopOwner: "false",
    date: "false",
    status: "false",
  };

  const subscription = Meteor.subscribe('messageBoxs.list');

  if(userRole() == 'customer'){
    Tracker.autorun(function() {
      if (subscription.ready()) {
        //return array of object that have same userId
        const messageBoxs = MessageBoxs.find({customer:Meteor.userId(), shopOwner:receiveId}).map(function (doc) {
          return doc;
        })
        console.log(messageBoxs);
        if(messageBoxs.length==0){
          upsertBox.customer = Meteor.userId()
          upsertBox.shopOwner = receiveId
          upsertBox.date = new Date().toISOString()
          upsertBox.status = "false"

          upsertMessageBox.call(upsertBox, (error, response) => {
            if (error) {
              console.log('danger');
            } else {
              console.log('success');
            }
          });
        }
        else{
          messageBoxId = messageBoxs[0]._id
          console.log(messageBoxId)
        }
      }
    });
    if(userRole() == 'customer'){
      Tracker.autorun(function() {
        if (subscription.ready()) {
          //return array of object that have same userId
          const messageBoxs = MessageBoxs.find({customer:Meteor.userId(), shopOwner:receiveId}).map(function (doc) {
            return doc;
          })
          messageBoxId = messageBoxs[0]._id
          const { doc } = component.props;
          const confirmation = doc && doc._id ? 'Message updated!' : 'Message added!';
          const upsert = {
            title: document.querySelector('[name="title"]').value.trim(),
            body: document.querySelector('[name="body"]').value.trim(),
            userId:Meteor.userId(),
            date: new Date().toISOString(),
            receiveId: receiveId,
            status: "false",
            messageBoxId: messageBoxId,
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
        }
      });
    }
    else{
      Tracker.autorun(function() {
        if (subscription.ready()) {
          //return array of object that have same userId
          const messageBoxs = MessageBoxs.find({customer:receiveId, shopOwner:Meteor.userId()}).map(function (doc) {
            return doc;
          })
          messageBoxId = messageBoxs[0]._id
          const { doc } = component.props;
          const confirmation = doc && doc._id ? 'Message updated!' : 'Message added!';
          const upsert = {
            title: document.querySelector('[name="title"]').value.trim(),
            body: document.querySelector('[name="body"]').value.trim(),
            userId:Meteor.userId(),
            date: new Date().toISOString(),
            receiveId: receiveId,
            status: "false",
            messageBoxId: messageBoxId,
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
        }
      });
    }
  }
  else{
    Tracker.autorun(function() {
      if (subscription.ready()) {
        //return array of object that have same userId
        const messageBoxs = MessageBoxs.find({customer:receiveId, shopOwner:Meteor.userId()}).map(function (doc) {
          return doc;
        })
        console.log(messageBoxs);
        if(messageBoxs.length==0){
          upsertBox.customer = receiveId
          upsertBox.shopOwner = Meteor.userId()
          upsertBox.date = new Date().toISOString()
          upsertBox.status = "false"

          upsertMessageBox.call(upsertBox, (error, response) => {
            if (error) {
              console.log('danger');
            } else {
              console.log('success');
            }
          });
        }
        else{
          messageBoxId = messageBoxs[0]._id
          console.log(messageBoxId)
        }
      }
    });
    if(userRole() == 'customer'){
      Tracker.autorun(function() {
        if (subscription.ready()) {
          //return array of object that have same userId
          const messageBoxs = MessageBoxs.find({customer:Meteor.userId(), shopOwner:receiveId}).map(function (doc) {
            return doc;
          })
          messageBoxId = messageBoxs[0]._id
          const { doc } = component.props;
          const confirmation = doc && doc._id ? 'Message updated!' : 'Message added!';
          const upsert = {
            title: document.querySelector('[name="title"]').value.trim(),
            body: document.querySelector('[name="body"]').value.trim(),
            userId:Meteor.userId(),
            date: new Date().toISOString(),
            receiveId: receiveId,
            status: "false",
            messageBoxId: messageBoxId,
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
        }
      });
    }
    else{
      Tracker.autorun(function() {
        if (subscription.ready()) {
          //return array of object that have same userId
          const messageBoxs = MessageBoxs.find({customer:receiveId, shopOwner:Meteor.userId()}).map(function (doc) {
            return doc;
          })
          messageBoxId = messageBoxs[0]._id
          const { doc } = component.props;
          const confirmation = doc && doc._id ? 'Message updated!' : 'Message added!';
          const upsert = {
            title: document.querySelector('[name="title"]').value.trim(),
            body: document.querySelector('[name="body"]').value.trim(),
            userId:Meteor.userId(),
            date: new Date().toISOString(),
            receiveId: receiveId,
            status: "false",
            messageBoxId: messageBoxId,
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
        }
      });
    }
  }

  // if(userRole() == 'customer'){
  //   Tracker.autorun(function() {
  //     if (subscription.ready()) {
  //       //return array of object that have same userId
  //       const messageBoxs = MessageBoxs.find({customer:Meteor.userId(), shopOwner:receiveId}).map(function (doc) {
  //         return doc;
  //       })
  //       messageBoxId = messageBoxs[0]._id
  //       const { doc } = component.props;
  //       const confirmation = doc && doc._id ? 'Message updated!' : 'Message added!';
  //       const upsert = {
  //         title: document.querySelector('[name="title"]').value.trim(),
  //         body: document.querySelector('[name="body"]').value.trim(),
  //         userId:Meteor.userId(),
  //         date: new Date().toISOString(),
  //         receiveId: receiveId,
  //         status: "false",
  //         messageBoxId: messageBoxId,
  //       };
  //
  //       if (doc && doc._id) upsert._id = doc._id;
  //
  //       upsertMessage.call(upsert, (error, response) => {
  //         if (error) {
  //           Bert.alert(error.reason, 'danger');
  //         } else {
  //           component.messageEditorForm.reset();
  //           Bert.alert(confirmation, 'success');
  //           component.props.history.push(`/messages/${response.insertedId || doc._id}`);
  //         }
  //       });
  //     }
  //   });
  // }
  // else{
  //   Tracker.autorun(function() {
  //     if (subscription.ready()) {
  //       //return array of object that have same userId
  //       const messageBoxs = MessageBoxs.find({customer:receiveId, shopOwner:Meteor.userId()}).map(function (doc) {
  //         return doc;
  //       })
  //       messageBoxId = messageBoxs[0]._id
  //       const { doc } = component.props;
  //       const confirmation = doc && doc._id ? 'Message updated!' : 'Message added!';
  //       const upsert = {
  //         title: document.querySelector('[name="title"]').value.trim(),
  //         body: document.querySelector('[name="body"]').value.trim(),
  //         userId:Meteor.userId(),
  //         date: new Date().toISOString(),
  //         receiveId: receiveId,
  //         status: "false",
  //         messageBoxId: messageBoxId,
  //       };
  //
  //       if (doc && doc._id) upsert._id = doc._id;
  //
  //       upsertMessage.call(upsert, (error, response) => {
  //         if (error) {
  //           Bert.alert(error.reason, 'danger');
  //         } else {
  //           component.messageEditorForm.reset();
  //           Bert.alert(confirmation, 'success');
  //           component.props.history.push(`/messages/${response.insertedId || doc._id}`);
  //         }
  //       });
  //     }
  //   });
  // }
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
      messageBoxId: {
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
      messageBoxId: {
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
