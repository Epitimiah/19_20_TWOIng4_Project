import React from 'react';
import axios from 'axios';
import './Worldwide.css';
import {
  Col,
    } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
//Pour le recharts
import {
  Legend, 
  //Utiliser pour adapeter la chart dans un container
  ResponsiveContainer, 
  PolarGrid, 
  PolarAngleAxis,
  RadarChart,
  Radar,
  PolarRadiusAxis,
} from 'recharts';

  class Worldwide extends React.Component {
    
   //Permet de set les données lors de la construction du component 
    componentDidMount() {
        this.getData();
    }
    
    constructor(props) {
      super(props); 
      this.state = {
        data_pie: [
          {
            "Country": "China",
            "number-people": 2 
          },
          {
            "Country": "Thailande",
            "number-people": 4 
        
          },
          {
            "Country": "Paris",
            "number-people": 1 
        
          },
          {
            "Country": "London",
            "number-people": 5 
        
          },
          {
            "Country": "Indonesia",
            "number-people": 0
        
          }
        ], 
      }
    }

    getData() {
      //Permet de get la data from  la BDD
        axios.get(`http://localhost:3001/Users/`)
        .then(response => {
          let sensorUser= []; 
          let buffer = []; 
          
          //On get tout les sensors
          sensorUser = response.data.filter(element => (element.userID === this.props.userId)  );
          
          //On get toutes les locations
          sensorUser.forEach(element => buffer.push(element.location) ); 
          //console.log( sensorUser); 
  
          this.setState({ sensorLocation: buffer.slice() });
  
          })
          .catch(error =>{
            console.log("Inside error");
            console.log(error);
        })    
    }

    
    SetData(data) {
      this.setState({
        data: data,
      })
    }

    render(){
      return(
       
        <Col sm={12} md={5} className="Col rounded">
            <ResponsiveContainer inline width="100%" height="100%">
               <RadarChart 
               outerRadius={70}
               width={730}
               height={250}
               data={this.state.data_pie}
               >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="Country" tick={{fill:'white', fontSize:"1.25rem"}} />
                  <PolarRadiusAxis angle={30} domain={[0, 5]} tick={{fontSize: "1rem"}} />
                  <Radar name="World" dataKey="number-people"  fill="#8884d8" fillOpacity={0.8} />
                        
                  <Legend />
                </RadarChart>
            </ResponsiveContainer>
        </Col>
      ); 
    }
  }
export default Worldwide;
  