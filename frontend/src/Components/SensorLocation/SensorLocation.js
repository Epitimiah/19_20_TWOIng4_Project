import React from 'react';
import './SensorLocation.css';
import {
  Col,
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const axios = require('axios');

class SensorLocation extends React.Component {

  //Permet de set les données lors de la construction du component 
  componentDidMount() {
    this.getData();
}
 
  constructor(props) {
    super(props); 
    this.state = {
      //sensorLocation:'',
      sensorLocation:[
          "France" 
      ]
    }
  }


  getData() {
    //Permet de get la data from  la BDD
      axios.get(`http://localhost:3001/sensors/`)
      .then(response => {
        let sensorUser= []; 
        let buffer = []; 
        
        //this.setState({ dataSensor: response.data });
        //response.data.forEach(element => sensorUser = element.filter    )
        sensorUser = response.data.filter(element => (element.userID === this.props.userId)  );
        
        sensorUser.forEach(element => buffer.push(element.location) ); 
        //console.log( sensorUser); 

        this.setState({ sensorLocation: buffer.slice() });

        })
        .catch(error =>{
          console.log("Inside error");
          console.log(error);
      })    
  }

    render(){
      return(
        <Col sm={12}  md={3} className="Col rounded" >
          <h4> Sensor location  </h4>
           
           {this.state.sensorLocation.map((element) => ( <p> {element} </p>  ))}
           
           
        </Col>
        
      ); 
    }
} export default SensorLocation;
  