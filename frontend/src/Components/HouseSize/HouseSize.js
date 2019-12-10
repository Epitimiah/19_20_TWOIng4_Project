import React from 'react';
import './HouseSize.css';
import {
  Col,
  Row, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const axios = require('axios');

class HouseSize extends React.Component {

  //Permet de set les données lors de la construction du component 
  componentDidMount() {
    this.getData();
}
 
  constructor(props) {
    super(props); 
    this.state = {
      houseType:'', 
    }
  }

  getData() {
    //Permet de get la data from  la BDD
      axios.get(`http://localhost:3001/users/${this.props.userId}`)
      .then(response => {
          this.setState({ houseType: response.data.houseSize });
      })
      .catch(error =>{
          console.log("Inside error");
          console.log(error);
      })    
  }
  
  render(){
      return(
        <Row  sm={12} md={3} className="Col rounded">
           <Col> 
             <h4> House size : </h4>
             <p> {this.state.houseType}</p> 
            </Col>
        </Row>
      ); 
    }
  }
  export default HouseSize;
