import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RatingForm from './../../components/RatingForm';
import TopNav from './../../components/TopNav';
import SideNav from './../../components/SideNav';
import BxChart from './../../components/BxChart';

class Teacher extends Component {
    //Initial State- we definitely need to set the current user, but not sure how to do it with Cognito
    state = {
        teacher: ''
    };

  render() {
    return (
      <div>
        <TopNav />
        <SideNav />
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
