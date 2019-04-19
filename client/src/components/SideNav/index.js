import React, {Component} from 'react';
import './style.css';
import M from "materialize-css";
import API from './../../utils/API';

class SideNav extends Component {
    state = {
        behaviorInfo: {},
        teacherID: '5cb8e2bd4c3e69054020ac33',
    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
        let id = this.state.teacherID;
        this.loadBehaviors(id);
    }

    // Loads all behaviors and sets them to this.state.behaviorInfo
    loadBehaviors = (id) => {
        API.getBehaviors(id)
            .then(res => 
                {                    
                    this.setState({ behaviorInfo: res.data });
                })
            .catch(err => console.log(err));
    };

    render() {
        return(
            <div>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li className="top">Logo</li>
                    {(this.state.behaviorInfo.behaviors) ? (
                        <div>
                            <ul className="collapsible" >
                            {this.state.behaviorInfo.behaviors.map(behaviors => (
                            
                                <li key={behaviors._id}>
                                    <div className="collapsible-header"><i className="material-icons">assignment</i>{behaviors.studentName}
                                        <div><i className="material-icons">expand_more</i></div>
                                    </div>
                                    <div className="collapsible-body" value={behaviors._id}><span>{behaviors.behaviorName}</span></div>
                                </li>
                                      
                            ))}
                            </ul>
                            <a href="#!" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        </div>
                    ) : 
                    (<ul>
                        <p>No Students</p>
                    </ul>)}
                </ul>
            </div>
        );
    }
};

export default SideNav;
