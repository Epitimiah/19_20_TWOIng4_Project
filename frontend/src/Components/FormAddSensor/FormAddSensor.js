

import React from 'react';
import './FormAddSensor.css';
import {
  Form,
  Button,
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


 class FormAddSensor extends React.Component {
  
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
                    <h1> {this.props.action} Sensor </h1>
                </Col>
            </Row>
            <br>
            </br>
            <Row>
              
                <Col md={{ span: 6, offset: 3 }} >
                    <Form.Row>
                    <Form.Group as={Col} style={{display: this.props.change, 'block' : 'none' }}>
                        <Form.Label> ID Sensor</Form.Label>
                        <Form.Control type="text" placeholder="User Id" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label> User Id</Form.Label>
                        <Form.Control type="text" placeholder="User Id" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Date dd/mm/yyyy" />
                    </Form.Group>
                    </Form.Row>

                    <Form.Group >
                        <Form.Label>Location</Form.Label>
                        <Form.Control placeholder="ex: France" />
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
export default FormAddSensor;