import React from 'react';
import './style.css';

//import Materialize from "materialize";

function TopNav() {
    return (
        <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#!" data-target="chat-dropdown" className="dropdown-trigger waves-effect"><i
                  className="material-icons">settings</i></a></li>      
          </ul><a href="#!" data-target="sidenav-left" className="sidenav-trigger left"><i
              className="material-icons black-text">menu</i></a>
        </div>
        <div id="chat-dropdown" className="dropdown-content dropdown-tabbed">
        <div id="settings" className="col s12">
          <div className="settings-group">
            <div className="switch right">
              <label>
                <a href="/logout" className="waves-effect waves-light btn-small" id="logout">Log Out</a>
            </label>
            </div>
          </div>
        </div>
      </div>
      </nav>
    

);
}

export default TopNav;