

import React from 'react';
import './SensorLocation.css';
import {
  Col,
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class SensorLocation extends React.Component {

    render(){
      return(
        <Col sm={12}  md={3} className="Col rounded" >
          <h4> sensor location  </h4>
          <p> Kitchen </p>
        </Col>
        
      ); 
    }
} export default SensorLocation;
  