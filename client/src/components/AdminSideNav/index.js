import React from 'react';
import './style.css';

function AdminSideNav(props) {
    return(
        <div className='burger'>
            <ul id='slide-out' className='sidenav sidenav-fixed'>
                {/*CHANGE TO THIS USER'S NAME <li className='top'>Welcome, {props.behaviorInfo.firstName} {props.behaviorInfo.lastName}!</li> */}
                <ul>
                    <li><a href='!#' onClick={props.handleSideNavClick}>Create/Edit Users</a></li>
                    <li><a href='!#' onClick={props.handleSideNavClick}>Link Teachers to Students</a></li>
                    <li><a href='!#' onClick={props.handleSideNavClick}>Create Behaviors to Track</a></li>
                </ul>
            </ul>
            <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
    );
};

export default AdminSideNav;
