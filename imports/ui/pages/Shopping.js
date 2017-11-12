import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button,InputGroup,FormGroup,FormControl,Glyphicon,ControlLabel} from 'react-bootstrap';
import ShopsList from '../containers/ShopsList.js';

const Shops = ({ history }) => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Shopping</h4>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xs={ 3 }>
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Sort by</ControlLabel>
          <FormControl componentClass="select" name="sort" placeholder="date">
            <option value="date">date</option>
            <option value="location">location</option>
            <option value="price">price</option>
            <option value="popular">popular</option>
          </FormControl>
        </FormGroup>
      </Col>
      <Col xs={ 3 }>
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Filter</ControlLabel>
          <FormControl componentClass="select" name="filter" placeholder="all">
            <option value="all">all</option>
            <option value="dog">dog</option>
            <option value="cat">cat</option>
            <option value="other">other</option>
          </FormControl>
        </FormGroup>
      </Col>
      <Col xs={ 3 }>
          <FormGroup>
          <ControlLabel>Search</ControlLabel>
            <InputGroup>
              <FormControl type="text" />
              <InputGroup.Addon>
                <Glyphicon glyph="fa fa-search" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
      </Col>
    </Row>
    <Row>
        <ShopsList history={history} />
    </Row>
  </div>
);

Shops.propTypes = {
  history: PropTypes.object,
};

export default Shops;
