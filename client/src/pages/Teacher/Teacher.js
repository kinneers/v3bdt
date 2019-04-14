import React, { Component } from "react";
import RatingForm from './../../components/RatingForm';
import TopNav from './../../components/TopNav';
import SideNav from './../../components/SideNav';


class Teacher extends Component {

//   // Set component's initial state
//   state = {
//   
//   };

  render() {
    return (
      <div>
        <TopNav />
        <SideNav />
          <div className="container">
        <RatingForm />
      
          </div>
        </div>
    );
  }
}

export default Teacher;
