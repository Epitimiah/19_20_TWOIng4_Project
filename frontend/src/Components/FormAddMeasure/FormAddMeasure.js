

import React from 'react';
import './FormAddMeasure.css';
import {
  Form,
  Button,
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


 class FormAddMeasure extends React.Component {
  
    render(){
      return(
/*
location
creationDate
userID
_id /// 
*/
        <section className="Section">
          
            <Row>
                <Col>
                    <h1> {this.props.action} Measure </h1>
                </Col>
            </Row>
            <br>
            </br>
            <Row>
              
                <Col md={{ span: 6, offset: 3 }} >
                    <Form.Row>
                    <Form.Group as={Col} style={{display: this.props.change, 'block' : 'none' }}>
                        <Form.Label> ID Measure</Form.Label>
                        <Form.Control type="text" placeholder="ID Measure" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>type</Form.Label>
                        <Form.Control type="text" placeholder="type: ex: temperature" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Value</Form.Label>
                        <Form.Control type="text" pattern="[0-9]" placeholder="without measure unit" />
                    </Form.Group>
                    </Form.Row>
                    
                    <Form.Group>
                        <Form.Label>ID Sensor</Form.Label>
                        <Form.Control placeholder="Id Sensor" />
                    </Form.Group>

                    <br></br>
                    <br></br>
                    { /*Faire passer le tableau par une fonction onclick ou grâce à res de express  */}
                    <Button variant="primary" type="submit">
                    Submit
                    </Button> 
                </Col>

            </Row>
        
          </section>
      ); 
    }
}
export default FormAddMeasure;