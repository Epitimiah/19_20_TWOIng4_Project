

import React from 'react';
import './PerHome.css';
import {
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const axios = require('axios');

class PerHome extends React.Component {
 
   //Permet de set les données lors de la construction du component 
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
  //Permet de get la data from  la BDD
    axios.get(`http://localhost:3001/users/${this.props.userId}`)
    .then(response => {
        this.setState({ nbPersonPerHome: response.data.personsInHouse});
    })
    .catch(error =>{
        console.log("Inside error");
        console.log(error);
    })    
}

    render(){
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
