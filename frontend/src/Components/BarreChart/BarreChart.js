
import React from 'react';
import './BarreChart.css';
import {
  Col, 
    } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    XAxis,
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    //Utiliser pour adapeter la chart dans un container
    ResponsiveContainer, 
    //Elements utile pour barchart
    BarChart, 
    Bar, 
  } from 'recharts';


  class BarreChart extends React.Component {
    
    constructor(props) {
      super(props); 
      this.state = {
        data:  [
          {
            name: 'Page A', moy: 4000,
          },
          {
            name: 'Page B', moy: 3000, 
          },
          {
            name: 'Page C', moy: 2000, 
          },
          {
            name: 'Page D', moy: 2780, 
          },
          {
            name: 'Page E', moy: 1890, 
          },
          {
            name: 'Page F', moy: 2390, 
          },
          {
            name: 'Page G', moy: 3490, 
          },
        ], 
      }
    }

    SetData(data) {
      this.setState({
        data: data,
      })
    }
    render(){
      return(
        <Col sm={12}  md={6} className="Col rounded">

          <ResponsiveContainer width="100%" height="100%">
              
              <BarChart 
              width={730}
              height={250}
              data={this.state.data}
              margin= {{top: 20, right: 5}}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{fill:'white', fontSize:"1rem"}}/>
                  <YAxis tick={{fill:'white', fontSize:"1rem"}} />
                  <Tooltip />
                  <Legend />
                  <Bar  fill="rgba(28, 35, 42, 0.89)" tick={{fill:'white', fontSize:"1rem"}} />
                  <Bar dataKey="moy" fill="#82ca9d" tick={{fill:'white', fontSize:"1rem"}}/>
              </BarChart>
          </ResponsiveContainer>
        </Col>
      ); 
    }
  }
  export default BarreChart;