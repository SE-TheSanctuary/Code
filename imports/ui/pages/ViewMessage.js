import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeMessage } from '../../api/messages/methods';
import NotFound from './NotFound';

const handleEdit = (history, _id) => {
  history.push(`/messages/${_id}/edit`);
};

const handleRemove = (history, _id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeMessage.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Message deleted!', 'success');
        history.push('/Messages');
      }
    });
  }
};

const ViewMessage = ({ doc, history }) => {
  return doc ? (
    <div className="ViewMessaget">
      <div className="page-header clearfix">
        <h4 className="pull-left">MessageName:{ doc && doc.title }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button
              onClick={() => handleEdit(history, doc._id)}
            >Edit</Button>
            <Button
              onClick={() => handleRemove(history, doc._id)}
              className="text-danger"
            >Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      breed    :{ doc && doc.breed }<br/>
      petType  :{ doc && doc.petType }<br/>
      userID   :{ doc && doc.userId }<br/>
      optional :{ doc && doc.body }<br/>
    </div>
  ) : <NotFound />;
};

ViewMessage.propTypes = {
  doc: PropTypes.object,
  history: PropTypes.object,
};

export default ViewMessage;
