import React from 'react';
import MessageBoxEditor from '../components/MessageBoxEditor';
import NotFound from './NotFound';

const EditMessageBox = (props) => {
  return props.doc ? (
    <div className="EditMessageBox">
      <h4 className="page-header">Editing "{ props.doc.title }"</h4>
      <MessageBoxEditor {...props} />
    </div>
  ) : <NotFound />;
};

EditMessageBox.propTypes = {
  doc: React.PropTypes.object,
};

export default EditMessageBox;
