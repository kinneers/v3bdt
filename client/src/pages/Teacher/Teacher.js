import React, { Component } from 'react';
//import RatingForm from './../../components/RatingForm';
import TopNav from './../../components/TopNav';
import SideNav from './../../components/SideNav';
//import BxChart from './../../components/BxChart';
import MainContainer from './../../components/MainContainer';
import './style.css';
import M from "materialize-css";
import API from './../../utils/API';

class Teacher extends Component {
    state = {
        behaviorInfo: {},
        teacherID: this.props.user._id,
        chooseComponent: '',
        chosenBxId: '',
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
        this.setState({ chooseComponent: event.target.text });
    };

    handleChooseStudent = event => {
        event.preventDefault();
        this.setState({ chosenStudent: event.target.getAttribute('data-student'), chosenBxId: event.target.name, chosenBx: event.target.text });
    };

    hideChart = event => {
        event.preventDefault();
        this.setState({ chosenStudent: '', chosenBxId: '', chosenBx: '' })
    }

    render() {
        console.log(this.props);
        return(
            <div className='fixtop'>
                <div className='side-nav'>
                    <SideNav
                        behaviorInfo={this.state.behaviorInfo}
                        handleSideNavClick={this.handleSideNavClick}
                    />
                </div>
                <div className='main-right'>
                    <TopNav logout={this.props.onLogout} />
                    <MainContainer 
                        chosenStudent={this.state.chosenStudent}
                        chosenBx={this.state.chosenBx}
                        chosenBxId={this.state.chosenBxId}
                        chooseComponent={this.state.chooseComponent}
                        user={this.props.user}
                        behaviorInfo={this.state.behaviorInfo}
                        handleChooseStudent={this.handleChooseStudent}
                        hideChart={this.hideChart}
                    />
                </div>
            </div>
        );
    };
};

export default Teacher;
