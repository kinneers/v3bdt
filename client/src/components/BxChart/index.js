import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './style.css';
import API from './../../utils/API';

class BxChart extends Component{
    constructor(props){
        super(props);

        this.state = {
            retrievedData: {},
            chartData:{}
        };
    };

    componentDidMount() {
        this.populateChart();
    };

    populateChart() {
        const id = this.props.chosenBxId;

        API.getChartData(id, this.props.user.accessToken.jwtToken)
        .then(res => {                    
            this.setState({ retrievedData: res.data });
            console.log(this.state.retrievedData);
                
            const retrievedData = this.state.retrievedData;

            let behaviorDates = []; //initialize an array to hold all dates
            let behaviorAverages = []; //initialize an array to hold all averages

            for (let i=0; i<retrievedData.length; i++) {
                console.log('BX DATE: ', retrievedData[i].behaviorDate); 
                let bxDate = retrievedData[i].behaviorDate; //Fix to 1st 10 characters
                console.log('BX Count: ', retrievedData[i].behaviorCount);
                let bxCount = (retrievedData[i].behaviorCount) / 2; //This count is doubling in database, so halve it before use until bug fixed
                
                console.log(retrievedData[i].behaviorTotal)
                let bxTotal = (retrievedData[i].behaviorTotal) / 2; //This count is doubling in database, so halve it before use until bug fixed
                console.log('BX Total: ', bxTotal);

                let averagePercentage = ((bxTotal/bxCount)*100).toFixed(2);
                console.log("AVERAGE: ", averagePercentage);

                behaviorDates.push(bxDate);
                behaviorAverages.push(averagePercentage);
            }

            console.log('BEHAVIOR DATES: ', behaviorDates);
            console.log('BEHAVIOR AVERAGES: ', behaviorAverages);

            this.setState({
                chartData: {
                    labels: behaviorDates,
                    datasets:[{
                        label: 'Behavior 1',
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
