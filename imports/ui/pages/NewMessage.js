import React, { PropTypes } from 'react';
import MessageEditor from '../components/MessageEditor.js';

const NewMessage = ({ history }) => (
  <div className="NewMessage">
    <h4 className="page-header">New message</h4>
    <MessageEditor history={history} />
  </div>
);

NewMessage.propTypes = {
  history: PropTypes.object,
};

export default NewMessage;
