import React, {Component} from 'react';
import './style.css';
import M from "materialize-css";
import logo from './logo.png';

//import Materialize from "materialize";


class TopNav extends Component {

  componentDidMount() {
      // Auto initialize all the things!
      M.AutoInit();
  }
  
  render() {
      return(

    
      <div>
            <ul id="dropdown1" className="dropdown-content">
              <li><a href="#!">Log Out</a></li>
            </ul>
            <nav>
              <div className="nav-wrapper">
                <img id="brand-logo" src={logo} alt="Logo" />;
}
                <ul className="right hide-on-med-and-down">
                  <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons right">settings</i></a></li>
                </ul>
              </div>
            </nav>
      </div>
              

);
}
}

export default TopNav;