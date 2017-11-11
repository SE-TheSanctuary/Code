import React, { PropTypes } from 'react';
import ShopEditor from '../components/ShopEditor.js';

const NewShop = ({ history }) => (
  <div className="NewShop">
    <h4 className="page-header">New Shop</h4>
    <ShopEditor history={history} />
  </div>
);

NewShop.propTypes = {
  history: PropTypes.object,
};

export default NewShop;
