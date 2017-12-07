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

const userName = () => {
  const user = Meteor.user();
  const profile = user ? user.profile : '';
  const name = profile ? profile.name : '';
  return user ? `${name.first}` : '';
};

const handleUpsert = () => {
  var chk = "false";
  messageBoxId = "";

  const subscription = Meteor.subscribe('messageBoxs.list');

  function checkrole(callback){

    if(userRole() == 'customer'){
      console.log("helllo")
      Tracker.autorun(function(thisComp) {
        if (subscription.ready()) {
          //return array of object that have same userId
          const messageBoxs = MessageBoxs.find({customer:Meteor.userId(), shopOwner:receiveId}).map(function (doc) {
            return doc;
          })
          console.log(messageBoxs);
          if(messageBoxs.length==0){
            const upsertBox = {
              customer: Meteor.userId(),
              customerName: userName(),
              shopOwner: receiveId,
              shopOwnerName: receiveName,
              date: new Date().toISOString(),
              statusCustomer: "read",
              statusShopOwner: "false",
            };

            upsertMessageBox.call(upsertBox, (error, response) => {
              if (error) {
                console.log('danger');
              } else {
                component.messageBoxEditorForm.reset();
                console.log('success');
              }
            });
          }
          else{
            messageBoxId = messageBoxs[0]._id
            console.log(messageBoxId)
          }
          thisComp.stop();
        }
      });
    }
    else if(userRole() == 'shopOwner'){
      Tracker.autorun(function(thisComp) {
        if (subscription.ready()) {
          //return array of object that have same userId
          const messageBoxs = MessageBoxs.find({customer:receiveId, shopOwner:Meteor.userId()}).map(function (doc) {
            return doc;
          })
          console.log(messageBoxs);
          if(messageBoxs.length==0){
            const upsertBox = {
              customer: receiveId,
              customerName: receiveName,
              shopOwner: Meteor.userId(),
              shopOwnerName: userName(),
              date: new Date().toISOString(),
              statusCustomer: "false",
              statusShopOwner: "read",
            };

            upsertMessageBox.call(upsertBox, (error, response) => {
              if (error) {
                console.log('danger');
              } else {
                component.messageBoxEditorForm.reset();
                console.log('success');
              }
            });
          }
          else{
            messageBoxId = messageBoxs[0]._id
            console.log(messageBoxId)
          }
          thisComp.stop();
        }
      });
    }

    if (typeof callback === 'function') {

        callback();
    }
  }

  function checkuser(){
    console.log("hellllo2")
    if(userRole() == 'customer'){
      messageBoxs = MessageBoxs.find({customer:Meteor.userId(), shopOwner:receiveId}).fetch()
      console.log(userName())
      messageBoxId = messageBoxs[0]._id
      const { doc } = component.props;
      const confirmation = doc && doc._id ? 'Message updated!' : 'Message added!';
      const upsert = {
        title: userName(),
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
          component.props.history.push(`/messageBoxs/${messageBoxId}`);
        }
      });

      MessageBoxs.update({_id : messageBoxId},{$set:{date : new Date().toISOString(), statusShopOwner : 'false',statusCustomer : 'read',}});
    }
    else if(userRole() == 'shopOwner'){
      messageBoxs = MessageBoxs.find({customer:receiveId, shopOwner:Meteor.userId()}).fetch()
      console.log(messageBoxs)
      messageBoxId = messageBoxs[0]._id
      const { doc } = component.props;
      const confirmation = doc && doc._id ? 'Message updated!' : 'Message added!';
      const upsert = {
        title: userName(),
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
          component.props.history.push(`/messageBoxs/${messageBoxId}`);
        }
      });

      MessageBoxs.update({_id : messageBoxId},{$set:{date : new Date().toISOString(), statusShopOwner : 'read', statusCustomer : 'false',}});
    }
  }

  checkrole(checkuser);

  /////////////////////////

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
