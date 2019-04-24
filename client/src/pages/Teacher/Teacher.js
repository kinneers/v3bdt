import React, { Component } from 'react';
//import { Route, Switch } from 'react-router-dom';
import RatingForm from './../../components/RatingForm';
import TopNav from './../../components/TopNav';
import SideNav from './../../components/SideNav';
import BxChart from './../../components/BxChart';
import './style.css';
import M from "materialize-css";
import API from './../../utils/API';

class Teacher extends Component {
    //Initial State- we definitely need to set the current user, but not sure how to do it with Cognito
    state = {
        behaviorInfo: {},
        teacherID: this.props.user._id,
        chosenBxId: '5cb8e2bf4c3e69054020ae5a', //mongo ID
        newData: {},
        radioButtons: {}
    };

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
        let id = this.state.teacherID;
        this.loadBehaviors(id);
        console.log(this.props.user);
    }

    // Loads all behaviors and sets them to this.state.behaviorInfo
    loadBehaviors = (id) => {
        API.getBehaviors(id, this.props.user.accessToken.jwtToken)
            .then(res => 
                {                    
                    this.setState({ behaviorInfo: res.data });
                    M.AutoInit();
                    this.statefulRadioButtons();
                    //This needs to happen in a click event later
                    this.getChartData();
                })
            .catch(err => console.log(err));
    };

    componentDidUpdate() {
        M.AutoInit();
    }

        //Post each student's data to the database
    //Show a modal when student data has been saved and reset radio buttons

    statefulRadioButtons() {
        console.log(this.saveData.radioButtons);
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        //Save the value to check if it is an empty string (or, for our purposes, null)- in which case we will not update the state
        let isItNull = event.target.value;
        if (isItNull === '') {
            console.log('This value is null');
        } else {
            //Gets the name and value of the target that changed
            const { name, value } = event.target;
            //Sets the state of the selected (and not-null) object in the newData object, which also updates correctly if the same behavior row's value is changed again before the save data button is clicked
            this.setState({
                newData: {
                    ...this.state.newData,
                    [name]: value
                }
            });
        }
    };

//   // When the form is submitted, use the API.saveData method to save the bx data

//     behaviorName: { type: String, required: true, },
//     behaviorTracked: [{
//       behaviorValue: { type: Number, enum: [0, 1], allowNull: true, required: false },
//       behaviorDate: { type: Date, default: Date.now(), required: true }
//     }],
//     status: {type: Boolean, required: true, default: true},
//     createdAt: { type: Date, default: Date.now() },
//     updatedAt: { type: Date, default: Date.now() },
//     studentName: { type: String, required: false, },
//     student: { type: Schema.Types.ObjectId, ref: "Student", required: false},
//     teachers: [{ type: Schema.Types.ObjectId, ref: "Teacher", required: true}]

    saveData = event => {
        event.preventDefault();
        console.log('The current state as of the button click is: ', this.state);
    //     const dataToSave = {
    //         //Figure out how to save the newData from the state- will likely need a for each or map
    //     }
    //     API.saveData({ dataToSave })
    //     // Then reset form
    //     .then(res => this.loadBehaviors())
    //     .catch(err => console.log(err));

        this.setState({ newData: {}, radioButtons: {} });
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <div className="side-nav">
                    <SideNav behaviorInfo={this.state.behaviorInfo}/>
                </div>
                <div className="main-right">
                    <TopNav />
                    <BxChart />
                    <RatingForm 
                        teacherID={this.state.teacherID}
                        behaviorInfo={this.state.behaviorInfo}
                        handleInputChange={this.handleInputChange.bind()}
                        saveData={this.saveData.bind()}
                        />
                    {/* <div className="container">
                        <Switch>
                            <Route exact path={`${this.props.match.path}`} component={RatingForm} />
                            <Route exact path={`${this.props.match.path}/chart`} component={BxChart} />
                        </Switch>  
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Teacher;
