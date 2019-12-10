import React from 'react';
import './SensorLocation.css';
import {
  Col,
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const axios = require('axios');

class SensorLocation extends React.Component {
/*
  //Permet de set les données lors de la construction du component 
  componentDidMount() {
    this.getData();
}
 
  constructor(props) {
    super(props); 
    this.state = {
      sensorLocation:'', 
    }
  }

  getData() {
    //Permet de get la data from  la BDD
      axios.get(`http://localhost:3001/sensors/${this.props.userId}`)
      .then(response => {
          this.setState({ sensorLocation: response.data.location });
      })
      .catch(error =>{
          console.log("Inside error");
          console.log(error);
      })    
  }*/

    render(){
      return(
        <Col sm={12}  md={3} className="Col rounded" >
          <h4> Sensor location  </h4>
          <p>  </p> {/*{this.state.location} */}
        </Col>
        
      ); 
    }
} export default SensorLocation;
  