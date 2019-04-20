import React, {Component} from 'react';
import './style.css';
import M from "materialize-css";
import API from './../../utils/API';

class SideNav extends Component {
    state = {
        behaviorInfo: {},
        teacherID: '5cb8e2bd4c3e69054020ac33',
        chosenBxId: '5cb8e2bf4c3e69054020ae5a'
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
                    M.AutoInit();
                    //This needs to happen in a click event later
                    this.getChartData();
                })
            .catch(err => console.log(err));
    };

    componentDidUpdate() {
        M.AutoInit();
    }

    render() {
        return(
            <div>
                <ul id="slide-out" className="sidenav sidenav-fixed">
                    <li className="top">Welcome!</li>
                        {(this.state.behaviorInfo.behaviors) ? (
                            <ul className="collapsible" >
                                {this.state.behaviorInfo.behaviors.map(behavior => (
                                    <li key={behavior._id}>
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
};

export default SideNav;
