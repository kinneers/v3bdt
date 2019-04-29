import React from 'react';
import './style.css';

function SideNav(props) {
    return(
        <div className='burger'>
            <ul id='slide-out' className='sidenav sidenav-fixed'>
                <li className='top'>Welcome, {props.behaviorInfo.firstName} {props.behaviorInfo.lastName}!</li>
                <ul>
                    <li><a href='!#' onClick={props.handleSideNavClick}>Rate Your Students</a></li>
                    <li><a href='!#' onClick={props.handleSideNavClick}>View Progress</a></li>
                </ul>
            </ul>
            <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
        //             {(props.behaviorInfo.behaviors) ? (
        //                 <ul className="collapsible" >
        //                     {props.behaviorInfo.behaviors.map(behavior => (
        //                         <li key={behavior._id}>
        //                             <div className="collapsible-header"><i className="material-icons">assignment</i>{behavior.studentName}
        //                                 <div><i className="material-icons">expand_more</i></div>
        //                             </div>
        //                             <div className="collapsible-body"><span><a href="#!" onClick={props.handleClick} data-studentname={behavior.studentName} data-bxDescription={behavior.behaviorName} name={behavior._id}>{behavior.behaviorName}</a></span></div>
        //                         </li>                                    
        //                     ))}
        //                 </ul>
        //         ) : 
        //         (<p>No Students Assigned</p>)}
    );
};


export default SideNav;
