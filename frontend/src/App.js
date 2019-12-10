import React from 'react';
import './App.css';
import {
  Form,
  FormControl, //
  Button,
  Col,
  Row, 
  ButtonToolbar, 
  DropdownButton, 
  Dropdown,
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import BarreChart from './Components/BarreChart/BarreChart.js'; 
import Worldwide from './Components/Worldwide/Worldwide.js'; 
import NbSensors from './Components/NbSensors/NbSensors.js'; 
import SensorLocation from './Components/SensorLocation/SensorLocation.js'; 
import UserLocation from './Components/UserLocation/UserLocation.js'; 
import PerHome from './Components/PerHome/PerHome.js'; 
import HouseSize from './Components/HouseSize/HouseSize.js'; 

import FormAddUser from './Components/FormAddUser/FormAddUser.js'; 
import FormAddSensor from './Components/FormAddSensor/FormAddSensor.js'; 
import FormAddMeasure from './Components/FormAddMeasure/FormAddMeasure.js'; 
import Delete from './Components/Delete/Delete.js'; 


class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      admin: false,
      toggleButton: "Admin",
      Subject: "User",
      Action: "none", 
    }
  }

  //Pour changer de form en fonction du bouton choisis 
  SetForm(subject,action) {
    this.setState({
      Subject: subject,
      Action: action,
    })
  }

  //Permet de passer d'une page admin à une autres 
  adminPage() {
      //Change le contenue du bouton Admin en Home si on est sur la page admin 
      if ( this.state.admin === true){
        this.setState({
          admin: !this.state.admin,
          toggleButton: "Home",
        })
      }
      //Change le contenue du bouton Admin en "Admin" si on est sur la page Home 
      else{
        this.setState({
          admin: !this.state.admin,
          toggleButton: "Admin",
        })
      }
  }

  renderNavBar = ()=> {
    return (
      <header className="App-header">
        <Row className="NavBar"> 
      
          <Col sm={12} md={4} className="Admin">
            <Button size="lg" variant="outline-light" onClick={ () => this.adminPage() }> {this.state.toggleButton} </Button>
          </Col>
      
          <Col sm={12} md={4} className="Brand rounded">
            <h1> Objets connectés </h1>
          </Col>
                
          <Col sm={12} md={4}>
             <Form inline className="Form" >
               <Form.Control type="text" placeholder="Search"  className="search mr-sm-0 mr-md-1" />
                 <Button  variant="outline-light" className="search">Search</Button>
              </Form>
         </Col>
                
        </Row>
          
        <hr color="white" width="90%"/>
      
      </header>
    ) 
  }

  formChoose = () =>{
    if ( this.state.Action === "Add"){   
        if ( this.state.Subject === "User"){
          return(
            <FormAddUser change="none" action={this.state.Action}>
            </FormAddUser>
          ) ;
        }
        if ( this.state.Subject === "Sensor"){
          return(
            <FormAddSensor change="none" action={this.state.Action}>
            </FormAddSensor>
          ) ;
        }
        if ( this.state.Subject === "Measure"){
          return(
            <FormAddMeasure change="none" action={this.state.Action}>
            </FormAddMeasure>
          ) ;
        }
    }
    else if ( this.state.Action === "Modify"){   
        if ( this.state.Subject === "User"){
          return(
            <FormAddUser change="true" action={this.state.Action}>
            </FormAddUser>
          ) ;
        }
        if ( this.state.Subject === "Sensor"){
          return(
            <FormAddSensor change="true" action={this.state.Action}>
            </FormAddSensor>
          ) ;
        }
        if ( this.state.Subject === "Measure"){
          return(
            <FormAddMeasure change="true" action={this.state.Action}>
            </FormAddMeasure>
          ) ;
        }
    }
    else if ( this.state.Action === "Delete" ){
      return(
        <Delete name= {this.state.Subject}></Delete>
      ); 
    }

  }

  render(){
    if(this.state.admin === false){
      return (
    
        <div className="App">
          
          {this.renderNavBar()}
    
          <section className="Section" >
            <Row className="Row">
    
              <Col md={4} className="Col-Ahead rounded">
                {/* Pour metter le widget user location */}
                <UserLocation> 
                </UserLocation>
                <br></br>
                <br></br>
                {/* Pour metter le widget Nb sensor */}
                <NbSensors>
                </NbSensors>
              </Col>

              <Col md={2}  >
                <h3> Worldwide West </h3>
              </Col>
              {/* Pour metter le widget pie chart worldwide  */}
              <Worldwide>
              </Worldwide>
              
            </Row>
    
            <Row className="Row">
              {/* Pour metter le widget user location */}
              <BarreChart>
              </BarreChart>
              {/* Pour metter le widget sensor location */}
              <SensorLocation>
              </SensorLocation>
              
    
              <Col className="Col-Down rounded">
                {/* Pour metter le widget personne/Home */}
                <PerHome>
                </PerHome>
                
                {/* Pour metter le widget HouseSize */}
                <HouseSize>
                </HouseSize>
               
              </Col>
              
            </Row>
          </section>
    
        </div>
        );
    }
    else{
      return(
        <div className="App">
          
          {this.renderNavBar()}
          <section className="Section">
          
             <Row>
               
              <Col  md={3} className="Requete">
              <br></br>
                <Row>
                  <Col> <h3> Requêtes dispo </h3></Col>
                </Row>
                <br></br>

                <Row>
                  <Col> 
                    <DropdownButton
                        drop="right"
                        variant="outline-info"
                        title="User" 
                        key="right"
                        size="lg"
                      >
                        <Dropdown.Item variant="outline-info" eventKey="1" onClick={ () => this.SetForm("User", "Add") } >Add New User</Dropdown.Item>
                        <Dropdown.Item variant="outline-info" eventKey="2" onClick={ () => this.SetForm("User", "Modify") }  >Modifiy user data</Dropdown.Item>
                        <Dropdown.Item variant="outline-info" eventKey="3" onClick={ () => this.SetForm("User", "Delete") }  >Delete User </Dropdown.Item>
                          
                    </DropdownButton>

                  </Col>
                </Row>
                <br></br>

                <Row>
                <Col> 
                    <DropdownButton
                        drop="right"
                        variant="outline-info"
                        title="Sensor" 
                        key="right"
                        size="lg"
                      >
                        <Dropdown.Item variant="outline-info" eventKey="1" onClick={ () => this.SetForm("Sensor", "Add") } >Add New Sensor</Dropdown.Item>
                        <Dropdown.Item variant="outline-info" eventKey="2" onClick={ () => this.SetForm("Sensor", "Modify") }  >Modifiy Sensor data</Dropdown.Item>
                        <Dropdown.Item variant="outline-info" eventKey="3" onClick={ () => this.SetForm("Sensor", "Delete") }  >Delete Sensor </Dropdown.Item>
                          
                    </DropdownButton>

                  </Col>
                </Row>
                <br></br>

                <Row>
                <Col> 
                    <DropdownButton
                        drop="right"
                        variant="outline-info"
                        title="Measure" 
                        key="right"
                        size="lg"
                      >
                        <Dropdown.Item variant="outline-info" eventKey="1" onClick={ () => this.SetForm("Measure", "Add") } >Add New Measure</Dropdown.Item>
                        <Dropdown.Item variant="outline-info" eventKey="2" onClick={ () => this.SetForm("Measure", "Modify") }  >Modifiy Measure data</Dropdown.Item>
                        <Dropdown.Item variant="outline-info" eventKey="3" onClick={ () => this.SetForm("Measure", "Delete") }  >Delete Measure </Dropdown.Item>
                          
                    </DropdownButton>

                  </Col>
                </Row>
              </Col>

              <Col  md={9}>
              
                <br></br>
                {this.formChoose()}
              
              
              </Col>
            </Row>
          </section>
           
          
          
        </div>
      ); 
    }
  }
}
export default App;
