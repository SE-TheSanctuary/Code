import React from 'react';
import ReviewEditor from '../components/ReviewEditor';
import NotFound from './NotFound';

const EditReview = (props) => {
  return props.doc ? (
    <div className="EditReview">
      <h4 className="page-header">Editing "{ props.doc.title }"</h4>
      <ReviewEditor {...props} />
    </div>
  ) : <NotFound />;
};

EditReview.propTypes = {
  doc: React.PropTypes.object,
};

export default EditReview;
