import React from 'react';
import BookingEditor from '../components/BookingEditor';
import NotFound from './NotFound';

const EditBooking = (props) => {
  return props.doc ? (
    <div className="EditBooking">
      <h4 className="page-header">Editing "{ props.doc.title }"</h4>
      <BookingEditor {...props} />
    </div>
  ) : <NotFound />;
};

EditBooking.propTypes = {
  doc: React.PropTypes.object,
};

export default EditBooking;
