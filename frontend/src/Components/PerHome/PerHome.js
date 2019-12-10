

import React from 'react';
import './PerHome.css';
import {
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class PerHome extends React.Component {

    render(){
      return(
        <Row sm={12} className="Col rounded">
         <Col> 
            <h4> Number of persons at home : </h4> 
            <p> 4 </p>
          </Col>
        </Row>
      ); 
    }
  }
export default PerHome;
