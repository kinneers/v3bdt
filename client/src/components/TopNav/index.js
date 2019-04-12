import React from 'react';
import './style.css';

//import Materialize from "materialize";

function TopNav() {
    return (
        <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>Logo</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="#!" data-target="chat-dropdown" class="dropdown-trigger waves-effect"><i
                  class="material-icons">settings</i></a></li>      
          </ul><a href="#!" data-target="sidenav-left" class="sidenav-trigger left"><i
              class="material-icons black-text">menu</i></a>
        </div>
      </nav>
    

);
}

export default TopNav;