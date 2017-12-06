import React, { PropTypes } from 'react';
import MessageBoxEditor from '../components/MessageBoxEditor.js';

const NewMessageBox = ({ history }) => (
  <div className="NewMessageBox">
    <h4 className="page-header">New messageBox</h4>
    <MessageBoxEditor history={history} />
  </div>
);

NewMessageBox.propTypes = {
  history: PropTypes.object,
};

export default NewMessageBox;
