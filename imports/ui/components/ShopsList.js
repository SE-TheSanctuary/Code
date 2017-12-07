import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Alert,Row,Col ,Image} from 'react-bootstrap';

const handleNav = (history, _id) => {
  history.push(`/shops/${_id}`);
};
//
const ShopsList = ({ history, shops }) => (
  shops.length > 0 ? <ListGroup className="ShopsList">
    {shops.map(({ _id, title, price, petType, tel }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id) }>
        <Row>
          <Col xs={ 2 } sm={ 1 }>
            <Image src="/Shop-icon.png" responsive />
          </Col>
          <Col xs={ 10 } sm={ 11 }>
            <b>{ title }</b><br/>
            Accept Pet Type : { petType }<br/>
            Starting price : { price }<br/>
            Tel : { tel }
          </Col>
        </Row>
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
