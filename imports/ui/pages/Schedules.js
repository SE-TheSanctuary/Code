import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button,FormGroup,FormControl,InputGroup } from 'react-bootstrap';
import BookingsList from '../containers/SchedulesList.js';

const handleTest = (history) => {
  //console.log('get value form',document.querySelector('[name="sort"]').value)
  monthKey=document.querySelector('[name="month"]').value;
  yearKey=document.querySelector('[name="year"]').value;
  console.log('monthKey',monthKey)
  console.log('yearKey',yearKey)
  history.push(`/schedules`);
};

const Bookings = ({ history }) => (
  <div className="Documents">
    <Row>
      <Col xs={ 12 }>
      <Row>
          <div className="page-header clearfix">
            <Col sm={ 1 } xs={ 12 }>
              <h4 >SchedulesList</h4>
            </Col>
            <Col sm={ 3 } smOffset={1} xs={ 12 }>
              <FormGroup controlId="formControlsSelect">
                  <InputGroup>
                      <FormControl componentClass="select" name="month" placeholder="all">
                        <option value="all">all</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">October</option>
                      </FormControl>
                      <InputGroup.Addon>month</InputGroup.Addon>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm={ 2 } xs={ 12 }>
                <FormGroup controlId="formControlsSelect">
                    <InputGroup>
                      <FormControl componentClass="select" name="year" placeholder="all">
                        <option value="all">all</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                      </FormControl>
                      <InputGroup.Addon>year&emsp;</InputGroup.Addon>
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
        <BookingsList history={history} />
      </Col>
    </Row>
  </div>
);

Bookings.propTypes = {
  history: PropTypes.object,
  monthKey: PropTypes.string,
  yearKey: PropTypes.string,
};

export default Bookings;
