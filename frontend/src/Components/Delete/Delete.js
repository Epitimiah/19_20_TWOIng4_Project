

import React from 'react';
import './Delete.css';
import {
  Form,
  Button,
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


 class Delete extends React.Component {
  
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
                <h1> Delete {this.props.name} </h1>
            </Col>
          </Row>
          <br>
          </br>
          <Row>
              
            <Col md={{ span: 6, offset: 3 }} >
          
            <Form.Group>
              <Form.Label>Id {this.props.name} </Form.Label>
              <Form.Control placeholder='id' />
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
export default Delete;