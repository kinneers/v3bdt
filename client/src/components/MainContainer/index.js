import React from 'react';
import RatingForm from './../RatingForm';
//import BxChart from './../BxChart';
//import TeacherDirections from './../TeacherDirections';
import ChooseChart from './../ChooseChart';
import './style.css';

function MainContainer(props) {

    switch(props.chooseComponent) {
        case 'Rate Your Students':
            return <RatingForm 
                        user={props.user}
                        behaviorInfo={props.behaviorInfo}
                    />;
        case 'View Progress':
            return (
                <ChooseChart 
                    user={props.user}
                    behaviorInfo={props.behaviorInfo}
                    handleChooseStudent={props.handleChooseStudent}
                    chosenBxId={props.chosenBxId}
                    chosenStudent={props.chosenStudent}
                    bxDescription={props.chosenBx} 
                    hideChart={props.hideChart}  
                />
            )
            
        default:
            return (
                <div className="container">
                    <div className="row chartCard">
                        <div className="col s12 center-align">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Welcome to the Behavioral Data Tracker!</span>
                                    <p>
                                        Choose "Rate Your Students" in the left navigation menu to rate your students' behaviors.
                                    </p>
                                    <p>
                                        Choose "View Progress" in the left navigation menu to view your students' progress monitoring charts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }

}

export default MainContainer;