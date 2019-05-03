import React, { Component } from 'react';
import TopNav from './../../components/TopNav';
import AdminSideNav from './../../components/AdminSideNav';
import AdminMainContainer from './../../components/AdminMainContainer';
// import './style.css';
import M from "materialize-css";
import API from './../../utils/API';

class Admin extends Component {
    state = {
        //behaviorInfo: {},
        adminID: '',
        chooseComponent: '',
        // chosenBxId: '',
        // chosenStudent: '',
        // chosenBx: ''
    };

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
        API.associateAdmin(this.props.user.userName, this.props.user.accessToken)
            .then(res => this.loadBehaviors(res.data._id))
            .catch(err=> console.log(err));
        // this.loadBehaviors(id);
    }

    // // Loads all behaviors and sets them to this.state.behaviorInfo
    // loadBehaviors = (id) => {
    //     API.getBehaviors(id, this.props.user.accessToken.jwtToken)
    //         .then(res => 
    //             {                    
    //                 this.setState({ behaviorInfo: res.data });
    //                 M.AutoInit();
    //             })
    //         .catch(err => console.log(err));
    // };

    // Just in case
    componentDidUpdate() {
        M.AutoInit();
    }

    handleSideNavClick = event => {
        event.preventDefault();
        this.setState({ chooseComponent: event.target.text });
    };

    // handleChooseStudent = event => {
    //     event.preventDefault();
    //     this.setState({ chosenStudent: event.target.getAttribute('data-student'), chosenBxId: event.target.name, chosenBx: event.target.text });
    // };

    // hideChart = event => {
    //     event.preventDefault();
    //     this.setState({ chosenStudent: '', chosenBxId: '', chosenBx: '' })
    // }

    render() {
        return(
            <div className='fixtop'>
                <div className='side-nav'>
                    <AdminSideNav
                        // behaviorInfo={this.state.behaviorInfo}
                        handleSideNavClick={this.handleSideNavClick}
                    />
                </div>
                <div className='main-right'>
                    <TopNav />
                    <AdminMainContainer 
                        // chosenStudent={this.state.chosenStudent}
                        // chosenBx={this.state.chosenBx}
                        // chosenBxId={this.state.chosenBxId}
                        chooseComponent={this.state.chooseComponent}
                        user={this.props.user}
                        // behaviorInfo={this.state.behaviorInfo}
                        // handleChooseStudent={this.handleChooseStudent}
                        // hideChart={this.hideChart}
                    />
                </div>
            </div>
        );
    };
};

export default Admin;
