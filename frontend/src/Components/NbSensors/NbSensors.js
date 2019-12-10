

import React from 'react';
import './NbSensors.css';
import {
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const axios = require('axios');

class NbSensors extends React.Component {
  componentDidMount() {
    this.getData();
}

constructor(props) {
  super(props); 
  this.state = {
    nbSensor: '', 
  }
}

getData() {
  //Permet de get la data from  la BDD
    axios.get(`http://localhost:3001/sensors/`)
    .then(response => {
      let sensorUser= []; 
     
      //On get tout les sensors
      sensorUser = response.data.filter(element => (element.userID === this.props.userId)  );

      console.log( sensorUser.length); 
      this.setState({ nbSensor: sensorUser.length });

      })
      .catch(error =>{
        console.log("Inside error");
        console.log(error);
    })    
}

    render(){
      return(
        <Row sm={12}  className="Col rounded">
            <Col>
                <h4> Nb sensors :</h4> 
                <p>  { this.state.nbSensor } </p> 
            </Col>
        </Row>
      );
    }
} export default NbSensors;