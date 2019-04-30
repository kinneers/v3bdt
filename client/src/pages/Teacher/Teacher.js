import React, { Component } from 'react';
import TopNav from './../../components/TopNav';
import SideNav from './../../components/SideNav';
import MainContainer from './../../components/MainContainer';
import './style.css';
import M from "materialize-css";
import API from './../../utils/API';

class Teacher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            behaviorInfo: {},
            teacherId: '',
            chooseComponent: '',
            chosenBxId: '',
            chosenStudent: '',
            chosenBx: ''
        };
    }
    
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
        API.associateUser(this.props.user.userName, this.props.user.accessToken)
            .then(res => this.loadBehaviors(res.data._id))
            .catch(err=> console.log(err));
    }

    // Loads all behaviors and sets them to this.state.behaviorInfo
    loadBehaviors = (id) => {
        API.getBehaviors(id, this.props.user.accessToken)
            .then(res => 
                {                    
                    this.setState({ behaviorInfo: res.data });
                    M.AutoInit();
                })
            .catch(err => console.log(err));
    };

    handleSideNavClick = event => {
        event.preventDefault();
        this.setState({ chooseComponent: event.target.text });
    };

    handleChooseStudent = event => {
        event.preventDefault();
        console.log(event.target);
        const studentName = event.target.getAttribute('data-student');
        const bxId = event.target.name;
        const bxDescription = event.target.text;
        this.setState({ chosenStudent: studentName, chosenBxId: bxId, chosenBx: bxDescription });
    };

    hideChart = event => {
        event.preventDefault();
        this.setState({ chosenStudent: '', chosenBxId: '', chosenBx: '' });
    }

    render() {
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
