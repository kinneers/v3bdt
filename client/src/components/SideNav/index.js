import React from 'react';
import './style.css';

//import Materialize from "materialize";

function SideNav(props) {

    return (
    
        <ul id="sidenav-left" className="sidenav sidenav-fixed">
      {/* User's name */}
      <li><a id='username-container' href="/dashboard" className="logo-container">Welcome<i className="material-icons left">spa</i></a></li>
      <li className="no-padding">
          <ul className="collapsible collapsible-accordion">
          </ul>
        </li>
      </ul>
    
    );
}

export default SideNav;