import React, { Component } from 'react';
//import { Route, Switch } from 'react-router-dom';
import RatingForm from './../../components/RatingForm';
import TopNav from './../../components/TopNav';
import SideNav from './../../components/SideNav';
import BxChart from './../../components/BxChart';
import './style.css';
import M from "materialize-css";
import API from './../../utils/API';

class Teacher extends Component {
    //Initial State- we definitely need to set the current user, but not sure how to do it with Cognito
    state = {
        behaviorInfo: {},
        teacherID: this.state.user._id,
        chosenBxId: '5cb8e2bf4c3e69054020ae5a',
    };

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
        let id = this.state.teacherID;
        this.loadBehaviors(id);
    }

    // Loads all behaviors and sets them to this.state.behaviorInfo
    loadBehaviors = (id) => {
        API.getBehaviors(id)
            .then(res => 
                {                    
                    this.setState({ behaviorInfo: res.data });
                    M.AutoInit();
                    console.log(res.data, this.state.behaviorInfo)
                })
            .catch(err => console.log(err));
    };

    componentDidUpdate() {
        M.AutoInit();
    }

    render() {
        return (
            <div>
                <div className="side-nav">
                    <SideNav behaviorInfo={this.state.behaviorInfo}/>
                </div>
                <div className="main-right">
                    <TopNav />
                    <BxChart />
                    <RatingForm 
                        behaviorInfo={this.state.behaviorInfo}
                        teacherID={this.state.teacherID}
                    />
                </div>
            </div>
        );
    }
}

export default Teacher;
