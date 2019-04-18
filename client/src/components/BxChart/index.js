import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './style.css';

//import Materialize from "materialize";

class BxChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['4/12/2019','4/13/2019','4//14/2019','4/15/2019','4/16/2019','4/17/2019'],
        datasets:[
          {
            label:'Progress',
            data:[
              10,
              20,
              30,
              40,
              50,
              60,
              70
            ],
         backgroundColor:[
           'rgba',
         ]   
          }
        ]
      }
    }
  }
  render(){
    return(
      <div className="container">
      <div className="chart">
        <Line
          data={this.state.chartData}
          width={500}
          height={150}
          options={{
            title:{
              display:true,
              text:'Progress',
              fontSize:25,
            }
        }}
      />

      </div>
    </div>
    )
  }


}



export default BxChart;
