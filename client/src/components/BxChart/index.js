import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './style.css';
import API from './../../utils/API';

class BxChart extends Component{
    constructor(props){
        super(props);

        this.state = {
            // retrievedData: {},
            chartData:{},
        };
    };

    componentDidMount() {
        this.populateChart();
    };

    componentDidUpdate() {
        this.populateChart();
    }

    populateChart() {
        const id = this.props.chosenBxId;

        API.getChartData(id, this.props.user.accessToken.jwtToken)
        .then(res => {
            const returnedData = res.data;        
            // this.setState({ retrievedData: res.data });
            console.log(returnedData);
                
            // const retrievedData = this.state.retrievedData;

            let behaviorDates = []; //initialize an array to hold all dates
            let behaviorAverages = []; //initialize an array to hold all averages

            for (let i=0; i<returnedData.length; i++) {
                let bxDate = returnedData[i].behaviorDate;
                let bxCount = (returnedData[i].behaviorCount);
                
                let bxTotal = (returnedData[i].behaviorTotal);

                let averagePercentage = ((bxTotal/bxCount)*100).toFixed(2);

                behaviorDates.push(bxDate);
                behaviorAverages.push(averagePercentage);
            }

            this.setState({
                chartData: {
                    labels: behaviorDates,
                    datasets:[{
                        label: this.props.bxDescription,
                        backgroundColor: "#48344f",
                        data: behaviorAverages,
                        borderColor: '"#48344f"',
                        pointBackgroundColor: '#48344f"',
                        pointBorderColor: ("#48344f"),
                        lineTension: 0,
                        pointStyle: 'circle',
                        fill: false
                    }]
                }
            });       
        })
        .catch(err => console.log(err));
    };
  
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
                                text: `${this.props.chosenStudent}`,
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
