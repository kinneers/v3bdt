import React, {Component} from 'react';
import './style.css';
import M from "materialize-css";

//import Materialize from "materialize";

class SideNav extends Component {

componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
}

render() {
    return(
        <div>
        <ul id="slide-out" className="sidenav sidenav-fixed">
        <li className="top">Logo</li>
        <ul className="collapsible">
    <li>
      <div className="collapsible-header"><i className="material-icons">assignment</i>Billy<div> 
      <i className="material-icons">expand_more</i></div>
      </div>
      <div className="collapsible-body"><span>Use inside voice</span></div>
    </li>
    <li>
      <div className="collapsible-header"><i className="material-icons">assignment</i>Sarah<div>
      <i className="material-icons">expand_more</i></div>
      </div>
      <div className="collapsible-body"><span>Sit still in class</span></div>
    </li>
    <li>
      <div className="collapsible-header"><i className="material-icons">assignment</i>Jodi<div>
      <i className="material-icons">expand_more</i></div>
      </div>
      <div className="collapsible-body" align-items= "center"><span>Raise hand</span></div>
    </li>
  </ul>
        </ul>
        <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
        )
}

}

export default SideNav;