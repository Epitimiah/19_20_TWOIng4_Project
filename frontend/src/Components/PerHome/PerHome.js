

import React from 'react';
import './PerHome.css';
import {
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//
// import axios from 'axios';
const axios = require('axios');
const API_URL = "http://localhost:3001/";  


class PerHome extends React.Component {
 
   //
  componentDidMount() {
    this.getData();
}
 
  constructor(props) {
    super(props); 
    this.state = {
      nbPersonPerHome:'', 
    }
  }

getData() {
  console.log("hey 2");
    axios.get('http://localhost:3001/users/5ddb94c6fc13ae640c000014')
    .then(response => {
        //this.setState({ nbPersonPerHome: response.data.location});
        this.setState({ nbPersonPerHome: response.data.personsInHouse});
        console.log("hey");
       
    })
    .catch(error =>{
        console.log("Inside error");
        console.log(error);
    })
    
}
    /*
    axios
        .get(`${API_URL}/users/${this.props.userId}`)
        .then(({data}) => {
            const main = data.location;
            return main;
            
        })
        .catch(console.error);
      */
    


    render(){
      //this.callAPI (); 
      return(
        <Row sm={12} className="Col rounded">
         <Col> 
            <h4> Number of persons at home : </h4> 
            <p> {this.state.nbPersonPerHome} </p> 
          </Col>
        </Row>
      ); 
    } 
}
export default PerHome;
