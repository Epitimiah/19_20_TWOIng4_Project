

import React from 'react';
import './UserLocation.css';
import {
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class UserLocation extends React.Component {

    render(){
      return(
        <Row sm={12} className="Col">
           <Col> 
              <h4 > User location : </h4>
              <p> China </p>
            </Col>
        </Row>
      ); 
    }
  }
export default UserLocation;
