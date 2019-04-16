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
        <ul class="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">assignment</i>Billy<div> 
      <i class="material-icons">expand_more</i></div>
      </div>
      <div class="collapsible-body"><span>Use inside voice</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">assignment</i>Sarah<div>
      <i class="material-icons">expand_more</i></div>
      </div>
      <div class="collapsible-body"><span>Sit still in class</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">assignment</i>Jodi<div>
      <i class="material-icons">expand_more</i></div>
      </div>
      <div class="collapsible-body" align-items= "center"><span>Raise hand</span></div>
    </li>
  </ul>
        </ul>
        <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
        )
}

}

export default SideNav;