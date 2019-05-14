import React from 'react';
import LinkUsers from '../LinkUsers';
import AddUser from '../AddUser';
import CreateGoal from '../CreateGoal';
import ChooseChart from '../ChooseChart';
import './style.css';

function AdminMainContainer(props) {

    switch(props.chooseComponent) {
        case 'Create Users':
            return (<div className="fixmain">
                    <AddUser 
                        user={props.user}
                    />
                </div>);
        case 'Link Users':
            return (<div className="fixmain">
                    <LinkUsers 
                        user={props.user}
                    />
                </div>);
        case 'Create Goals':
            return (<div className="fixmain">
                    <CreateGoal
                        user={props.user}
                    />
                </div>);
        case 'View Student Data':
        return (<div className="fixmain">
                    <ChooseChart 
                        user={props.user}
                        behaviorInfo={props.behaviorInfo}
                        handleChooseStudent={props.handleChooseStudent}
                        chosenBxId={props.chosenBxId}
                        chosenStudent={props.chosenStudent}
                        chosenBx={props.chosenBx} 
                        hideChart={props.hideChart}
                        populateChart={props.populateChart}
                        chartData={props.chartData}
                        // ready={props.ready}
                    />
                </div>); 
        default:
            return (
                <div className="fixmain">
                    <div className="container">
                        <div className="row chartCard">
                            <div className="col s12 center-align">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">Welcome to the Behavioral Data Tracker!</span>
                                        <p>
                                            As an administrator, you have the ability to create and edit users, link teachers and students by creating classes, enter behavior goals, and view student data.
                                        </p>
                                        <p>
                                            Use the navigation pane on the left to choose what you would like to accomplish.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
    };
};

export default AdminMainContainer;