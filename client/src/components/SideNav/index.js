import React from 'react';
import './style.css';
    
function SideNav(props) {
    return(
        <div className="burger">


            <ul id="slide-out" className="sidenav sidenav-fixed">
                <li className="top">Welcome!</li>
                    {(props.behaviorInfo.behaviors) ? (
                        <ul className="collapsible" >
                            {props.behaviorInfo.behaviors.map(behavior => (
                                <li key={behavior._id}>
                                {console.log(behavior)}
                                    <div className="collapsible-header"><i className="material-icons">assignment</i>{behavior.studentName}
                                        <div><i className="material-icons">expand_more</i></div>
                                    </div>
                                    <div className="collapsible-body"><span><a href="#!" value={behavior._id}>{behavior.behaviorName}</a></span></div>
                                </li>                                    
                            ))}
                        </ul>
                ) : 
                (<p>No Students</p>)}
            </ul>
            <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
    );
}

export default SideNav;
