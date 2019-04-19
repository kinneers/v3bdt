import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RatingForm from './../../components/RatingForm';
import TopNav from './../../components/TopNav';
import SideNav from './../../components/SideNav';
import BxChart from './../../components/BxChart';
import API from './../../utils/API';

class Teacher extends Component {
    //Initial State- we definitely need to set the current user, but not sure how to do it with Cognito
    state = {
        teacher: '',
        behaviorInfo: {},
        teacherID: '5cb8e2bd4c3e69054020ac33',
    };

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
                })
            .catch(err => console.log(err));
    };


  render() {
    return (
      <div>
        <TopNav />
        <SideNav />
        <BxChart />
          <div className="container">
               <Switch>
                    <Route exact path={`${this.props.match.path}`} component={RatingForm} />
                    <Route exact path={`${this.props.match.path}/chart`} component={BxChart} />
               </Switch>  
            </div>
        </div>
    );
  }
}

export default Teacher;
