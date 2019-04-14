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
        <li><a href="#!">Second Sidebar Link</a></li>
        <li><a href="#!">Second Sidebar Link</a></li>
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
        )
}
}

export default SideNav;