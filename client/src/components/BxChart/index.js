import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './style.css';
import API from './../../utils/API';

class BxChart extends Component{
    constructor(props){
        super(props);

        this.state = {
            chartData:{},
        };
    };

    componentDidMount() {
        this.populateChart();
    };

    //Doesn't work
    // shouldComponentUpdate(, nextState) {
    //     return nextProps.chosenBxId !== this.props.chosenBxId;
    // };

    //Maybe try to get a snapshot of the previous state to compare...
    componentDidUpdate() {
        // if (this.shouldComponentUpdate()) {
        //     this.populateChart();
        // } else {
        //     console.log('Do nothing.')
        // }
    };
    
    populateChart() {
        if (this.props.chosenBxId) {
            const id = this.props.chosenBxId;
            //Call for all the data associated with this behavior needed for chart
            API.getChartData(id, this.props.user.accessToken.jwtToken)
            .then(res => {
                const returnedData = res.data;        
                // this.setState({ retrievedData: res.data });
                console.log(returnedData);
                    
                // const retrievedData = this.state.retrievedData;

                let behaviorDates = []; //initialize an array to hold all dates
                let behaviorAverages = []; //initialize an array to hold all averages

                for (let i=0; i<returnedData.length; i++) {
                    //Gathers info needed to populate chart
                    let bxDate = returnedData[i].behaviorDate;
                    let bxCount = (returnedData[i].behaviorCount);
                    let bxTotal = (returnedData[i].behaviorTotal);
                    //Calculates percent met for the day
                    let averagePercentage = ((bxTotal/bxCount)*100).toFixed(2);
                    //Pushes date and percent met to arrays
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
        } else { console.log('THIS IS WHERE A RE-RENDER NEEDS TO HAPPEN!') };
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
                            scales: {
                                yAxes: [{
                                    ticks: {
<<<<<<< HEAD
                                        beginAtZero: true,
                                        max: 100,
                                        min: 0
=======
                                        min: 0,
                                        max: 100
>>>>>>> 78bbf9176d701d75985e5edf25ad5e4269447d71
                                    }
                                }]
                            },
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
                <div>
                    <button className="waves-effect waves-light btn-small" id="hideChart" onClick={this.props.hideChart}>Click to Hide Chart</button>
                </div>
            </div>
        )
    }
}

export default BxChart;
