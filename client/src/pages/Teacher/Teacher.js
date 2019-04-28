import React, { Component } from 'react';
import RatingForm from './../../components/RatingForm';
import TopNav from './../../components/TopNav';
import SideNav from './../../components/SideNav';
import BxChart from './../../components/BxChart';
import './style.css';
import M from "materialize-css";
import API from './../../utils/API';

class Teacher extends Component {
    state = {
        behaviorInfo: {},
        teacherID: this.props.user._id,
        chosenBxId: '', //It would be nice to add a hide chart button that clears this
        chosenStudent: '',
        chosenBx: ''
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
                })
            .catch(err => console.log(err));
    };

    // Just in case
    componentDidUpdate() {
        M.AutoInit();
    }

    handleSideNavClick = event => {
        event.preventDefault();
        this.setState({ chosenStudent: event.target.getAttribute('data-studentname'), chosenBxId: event.target.name, chosenBx: event.target.getAttribute('data-bxDescription') });
    };

    hideChart = event => {
        event.preventDefault();
        this.setState({ chosenStudent: '', chosenBxId: '', chosenBx: '' });
    }

    render() {
        console.log(this.props);
        return (
            <div className="fixtop">
                <div className="side-nav">
                    <SideNav 
                        behaviorInfo={this.state.behaviorInfo}
                        handleClick={this.handleSideNavClick}
                    />
                </div>
                <div className="main-right">
                    <TopNav />
                    {(this.state.chosenBxId) ? 
                        <BxChart 
                            chosenBxId={this.state.chosenBxId}
                            chosenStudent={this.state.chosenStudent}
                            bxDescription={this.state.chosenBx}
                            user={this.props.user}
                            hideChart={this.hideChart}
                        /> : 
                        (<div className="container">
                            <div className="row chartCard">
                                <div className="col s12 center-align">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                            <span className="card-title">To View Progress Charts:</span>
                                            <p>
                                                Please choose a student's behavior from the left navigation page to view progress.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                    <RatingForm 
                        teacherID={this.state.teacherID}
                        behaviorInfo={this.state.behaviorInfo}
                        user={this.props.user}
                    />
                </div>
            </div>
        );
    }
}

export default Teacher;
