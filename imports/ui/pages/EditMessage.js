import React from 'react';
import MessageEditor from '../components/MessageEditor';
import NotFound from './NotFound';

const EditMessage = (props) => {
  return props.doc ? (
    <div className="EditMessage">
      <h4 className="page-header">Editing "{ props.doc.title }"</h4>
      <MessageEditor {...props} />
    </div>
  ) : <NotFound />;
};

EditMessage.propTypes = {
  doc: React.PropTypes.object,
};

export default EditMessage;
