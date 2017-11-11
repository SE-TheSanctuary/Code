import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (history, _id) => {
  history.push(`/shops/${_id}`);
};

const ShopsList = ({ history, documents }) => (
  shops.length > 0 ? <ListGroup className="ShopsList">
    {shops.map(({ _id, title }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id) }>
        { title }
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No shops yet.</Alert>
);

ShopsList.propTypes = {
  history: PropTypes.object,
  documents: PropTypes.array,
};

export default ShopsList;
