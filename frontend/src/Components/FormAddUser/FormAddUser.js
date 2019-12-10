

import React from 'react';
import './FormAddUser.css';
import {
  Form,
  Button,
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


 class FormAddUser extends React.Component {
  
    render(){
      return(
/*
location
personsInHouse
houseSize
_id /// 
*/
<section className="Section">
          
          <Row>
            <Col>
                <h1> {this.props.action} User </h1>
            </Col>
          </Row>
          <br>
          </br>
          <Row>
              
            <Col md={{ span: 6, offset: 3 }} >
            <Form.Row>
              <Form.Group as={Col} style={{display: this.props.change, 'block' : 'none' }}>
                <Form.Label> ID User</Form.Label>
                <Form.Control type="text" placeholder="Id User" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>House Size</Form.Label>
                <Form.Control type="text" placeholder="House Size (m²)" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Nb people inside</Form.Label>
                <Form.Control type="text" placeholder="People inside the house" />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control placeholder="France" />
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
export default FormAddUser;