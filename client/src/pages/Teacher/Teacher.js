import React, { Component } from 'react';
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
        teacherID: this.props.user._id,
        chosenBxId: '5cb8e2bf4c3e69054020ae5a', //mongo ID
    };

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
        let id = this.state.teacherID;
        this.loadBehaviors(id);
    }

    // Loads all behaviors and sets them to this.state.behaviorInfo
    loadBehaviors = (id) => {
        API.getBehaviors(id, this.props.user.accessToken.jwtToken)
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
        console.log(this.props);
        return (
            <div>
                <div className="side-nav">
                    <SideNav behaviorInfo={this.state.behaviorInfo}/>
                </div>
                <div className="main-right">
                    <TopNav />
                    <BxChart />
                    <RatingForm 
                        teacherID={this.state.teacherID}
                        behaviorInfo={this.state.behaviorInfo}
                    />
                </div>
            </div>
        );
    }
}

export default Teacher;
