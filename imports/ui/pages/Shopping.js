import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button,InputGroup,FormGroup,FormControl,Glyphicon,ControlLabel} from 'react-bootstrap';
import ShopsList from '../containers/ShopsList.js';

const Shops = ({ history }) => (
  <div className="Documents">
    <Row>
        <div className="page-header clearfix">
          <Col xs={ 2 } >
            <h4 >Shopping</h4>
          </Col>
          <Col xs={ 2 } xsOffset={1}>
            <FormGroup controlId="formControlsSelect">
                <InputGroup>
                    <FormControl componentClass="select" name="sort" placeholder="date">
                      <option value="date">date</option>
                      <option value="location">location</option>
                      <option value="price">price</option>
                      <option value="popular">popular</option>
                    </FormControl>
                    <InputGroup.Addon>Sort by</InputGroup.Addon>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col xs={ 2 }>
              <FormGroup controlId="formControlsSelect">
                  <InputGroup>
                    <FormControl componentClass="select" name="filter" placeholder="all">
                      <option value="all">all</option>
                      <option value="dog">dog</option>
                      <option value="cat">cat</option>
                      <option value="other">other</option>
                    </FormControl>
                    <InputGroup.Addon>Filter</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col xs={ 5 }>
                <FormGroup>
                <InputGroup>
                    <FormControl type="text" />
                    <InputGroup.Button>
                      <Button>Search</Button>
                    </InputGroup.Button>
                  </InputGroup>
                </FormGroup>
              </Col>
          </div>
      </Row>
      <Row>
        <Col xs={ 12 }>
          <ShopsList history={history} />
        </Col>
      </Row>
  </div>
);

Shops.propTypes = {
  history: PropTypes.object,
};

export default Shops;
