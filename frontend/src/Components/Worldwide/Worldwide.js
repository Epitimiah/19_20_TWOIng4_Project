import React from 'react';
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


const data_pie = [
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
  ]; 
  class Worldwide extends React.Component {
  
    render(){
      return(
       
        <Col sm={12} md={5} className="Col rounded">
            <ResponsiveContainer inline width="100%" height="100%">
               <RadarChart 
               outerRadius={70}
               width={730}
               height={250}
               data={data_pie}
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
  