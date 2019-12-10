import React from 'react';
import './UserLocation.css';
import {
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const axios = require('axios');

class UserLocation extends React.Component {

  //Permet de set les données lors de la construction du component 
  componentDidMount() {
    this.getData();
}
 
  constructor(props) {
    super(props); 
    this.state = {
      userLocation:'', 
    }
  }

  getData() {
    //Permet de get la data from  la BDD
      axios.get(`http://localhost:3001/users/${this.props.userId}`)
      .then(response => {
          this.setState({ userLocation: response.data.location });
      })
      .catch(error =>{
          console.log("Inside error");
          console.log(error);
      })    
  }

    render(){
      return(
        <Row sm={12} className="Col">
           <Col> 
              <h4 > User location : </h4>
              <p> {this.state.userLocation} </p>  
            </Col>
        </Row>
      ); 
    }
  }
export default UserLocation;
