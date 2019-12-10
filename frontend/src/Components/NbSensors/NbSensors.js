

import React from 'react';
import './NbSensors.css';
import {
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NbSensors extends React.Component {

    render(){
      return(
        <Row sm={12}  className="Col rounded">
            <Col>
                <h4> Nb sensors :</h4> 
                <p>  46 </p>
            </Col>
        </Row>
      );
    }
} export default NbSensors;