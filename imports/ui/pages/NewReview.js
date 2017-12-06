import React, { PropTypes } from 'react';
import ReviewEditor from '../components/ReviewEditor.js';

const NewReview = ({ history }) => (
  <div className="NewReview">
    <h4 className="page-header">Add Review</h4>
    <ReviewEditor history={history} />
  </div>
);

NewReview.propTypes = {
  history: PropTypes.object,
};

export default NewReview;
