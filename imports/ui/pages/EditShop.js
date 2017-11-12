import React from 'react';
import ShopEditor from '../components/ShopEditor';
import NotFound from './NotFound';

const EditShop = (props) => {
  return props.doc ? (
    <div className="EditShop">
      <h4 className="page-header">Editing "{ props.doc.title }"</h4>
      <ShopEditor {...props} />
    </div>
  ) : <NotFound />;
};

EditShop.propTypes = {
  doc: React.PropTypes.object,
};

export default EditShop;
