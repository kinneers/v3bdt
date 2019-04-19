import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RatingForm from './../../components/RatingForm';
import TopNav from './../../components/TopNav';
import SideNav from './../../components/SideNav';
import BxChart from './../../components/BxChart';
import './style.css';


class Teacher extends Component {
    //Initial State- we definitely need to set the current user, but not sure how to do it with Cognito
    state = {
        teacher: '',
    };


  render() {
    return (
      <div className="side-nav">
          <SideNav />

        <div>
      
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
        </div>
    );
  }
}

export default Teacher;
