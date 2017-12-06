import React, { PropTypes ,Component} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button,InputGroup,FormGroup,FormControl,Glyphicon,ControlLabel} from 'react-bootstrap';
import ShopsList from '../containers/ShopsList.js';
import { Meteor } from 'meteor/meteor';

const handleTest = (history) => {
  //console.log('get value form',document.querySelector('[name="sort"]').value)
  sortKey=document.querySelector('[name="sort"]').value;
  filterKey=document.querySelector('[name="filter"]').value;
  console.log('filterKey',filterKey)
  console.log('sortKey',sortKey)
  history.push(`/shopping`);
};


const Shops = ({ history }) => (

  <div className="Documents">
    <Row>
        <div className="page-header clearfix">
          <Col sm={ 2 } xs={ 12 }>
            <h4 >Shopping</h4>
          </Col>
          <Col sm={ 2 } smOffset={1} xs={ 12 }>
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
            <Col sm={ 2 } xs={ 12 }>
              <FormGroup controlId="formControlsSelect">
                  <InputGroup>
                    <FormControl componentClass="select" name="filter" placeholder="all">
                      <option value="all">all</option>
                      <option value="dog">dog</option>
                      <option value="cat">cat</option>
                      <option value="other">other</option>
                    </FormControl>
                    <InputGroup.Addon>Filter&emsp;</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm={ 5 } xs={ 12 }>
                <FormGroup>
                <InputGroup>
                    <FormControl type="text" />
                    <InputGroup.Button>
                      <Button onClick={() => handleTest(history)}>Search</Button>
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
  filterKey: PropTypes.string,
};

export default Shops;
