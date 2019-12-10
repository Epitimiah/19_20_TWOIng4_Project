



import React from 'react';
import './HouseSize.css';
import {
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class HouseSize extends React.Component {

    render(){
      return(
        <Row  sm={12} md={3} className="Col rounded">
           <Col> 
             <h4> House size : </h4>
             <p> 40 m²</p> 
            </Col>
        </Row>
      ); 
    }
  }
  export default HouseSize;
