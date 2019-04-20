import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RatingForm from './../../components/RatingForm';
import TopNav from './../../components/TopNav';
import SideNav from './../../components/SideNav';
import BxChart from './../../components/BxChart';
import './style.css';
import API from './../../utils/API';

class Teacher extends Component {
    //Initial State- we definitely need to set the current user, but not sure how to do it with Cognito
    state = {
        behaviorInfo: {},
        teacherID: '5cb8e2bd4c3e69054020ac33',
        chosenBxId: '5cb8e2bf4c3e69054020ae5a',
        bxInfoToMakeChart: {},
        newData: {}
    }

    componentDidMount() {
        // Auto initialize all the things!
        let id = this.state.teacherID;
        this.loadBehaviors(id);
    }

    // Loads all behaviors and sets them to this.state.behaviorInfo
    loadBehaviors = (id) => {
        API.getBehaviors(id)
            .then(res => 
                {                    
                    this.setState({ behaviorInfo: res.data });
                    //This needs to happen in a click event later
                    this.getChartData();
                })
            .catch(err => console.log(err));
    };

    getChartData = () => {
        //Check if there is a behavior Id in state
        //If not, console.log('No behavior chosen');
        //If get the behaviorId we are interested in from state
        //Get the data associated with the chosen behaviorId
        API.getBehaviorData(this.state.chosenBxId)
            .then(res => 
                {                    
                    this.setState({ bxInfoToMakeChart: res.data });
                    this.formatChart();
                })
            .catch(err => console.log(err));
        


//HOW THE CHART DATA NEEDS TO BE SAVED IN STATE:
        // chartData:{
        //     labels: ['4/12/2019','4/13/2019','4//14/2019','4/15/2019','4/16/2019','4/17/2019'],
        //     datasets:[
        //       {
        //       label: 'Behavior 1',
        //       backgroundColor: "#48344f",
        //       data: [12, 19, 3, 5, 2, 3],
        //       borderColor: '"#48344f"',
        //       pointBackgroundColor: '#48344f"',
        //       pointBorderColor: ("#48344f"),
        //       lineTension: 0,
        //       pointStyle: 'circle',
        //       fill: false
        //       }
        //     ]
        //   }
    }

    formatChart = () => {
        console.log(this.state.bxInfoToMakeChart);
        //These two arrays must match up!
        let labels = []; //Each rating date needs to be pushed to this array
        let data = []; //The average of each rating date needs to be pushed to this array
        const bxDescription = this.state.bxInfoToMakeChart.behaviorName;
        //Get the behavior tracking data
        let behaviorData = this.state.bxInfoToMakeChart.behaviorTracked;
        console.log(behaviorData);

        //Current format of incoming data:


        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: bxDescription,
                    backgroundColor: "#48344f",
                    data: data,
                    borderColor: '"#48344f"',
                    pointBackgroundColor: '#48344f"',
                    pointBorderColor: ("#48344f"),
                    lineTension: 0,
                    pointStyle: 'circle',
                    fill: false
                }
            ]
        };
        console.log(`You currently have the following chartData: Labels: ${chartData.labels}, label for description: ${chartData.datasets[0].label}, data: ${chartData.datasets[0].data}`);
    }


    render() {
        return (
            <div>
                <div className="side-nav">
                    <SideNav />
                </div>
                <div className="main-right">
                    <TopNav />
                    <BxChart />
                    <div className="container">
                        <Switch>
                            <Route exact path={`${this.props.match.path}`} component={RatingForm} />
                            <Route exact path={`${this.props.match.path}/chart`} component={BxChart} />
                        </Switch>  
                    </div>
                </div>
            </div>
        );
    }
}

export default Teacher;
