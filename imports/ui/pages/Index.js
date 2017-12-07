import React from 'react';
import { Jumbotron,Row,Col } from 'react-bootstrap';


const Index = () => (
  <div>
    <Jumbotron className="text-center">
      <img alt="640x360" src="/pet-icon.png" responsive/>
      <h2 className="JDT11">THE</h2>
      <p>SANCTUARY</p>
      <p style={ { fontSize: '16px', color: '#aaa' } }>the pet hotel booking</p>
    </Jumbotron>
  </div>
);

export default Index;
