import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { removeMessageBox } from '../../api/messageBoxs/methods';
import NotFound from './NotFound';

const handleEdit = (history, _id) => {
  history.push(`/messageBoxs/${_id}/edit`);
};

const handleRemove = (history, _id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeMessageBox.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('MessageBox deleted!', 'success');
        history.push('/MessageBoxs');
      }
    });
  }
};

const ViewMessageBox = ({ doc, history }) => {
  return doc ? (
    <div className="ViewMessageBox">
      <div className="page-header clearfix">
        <h4 className="pull-left">MessageBoxName:{ doc && doc.title }</h4>
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

ViewMessageBox.propTypes = {
  doc: PropTypes.object,
  history: PropTypes.object,
};

export default ViewMessageBox;
