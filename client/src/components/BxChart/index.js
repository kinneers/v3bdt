import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './style.css';

class BxChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['4/12/2019','4/13/2019','4//14/2019','4/15/2019','4/16/2019','4/17/2019'],
        datasets:[
          {
          label: 'Behavior 1',
          backgroundColor: "#48344f",
          data: [12, 19, 3, 5, 2, 3],
          borderColor: '"#48344f"',
          pointBackgroundColor: '#48344f"',
          pointBorderColor: ("#48344f"),
          lineTension: 0,
          pointStyle: 'circle',
          fill: false
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
                legend: {
                  labels: {
                    fontColor: "#135764",
                    fontSize: 18
                
                  }
                }
                }
            }}
        />
        </div>
    </div>
    )
  }
}

export default BxChart;
