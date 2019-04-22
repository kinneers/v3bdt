import React, { Component } from 'react';
import './style.css';
import API from './../../utils/API';
//import Moment from 'react-moment';
const moment = require('moment');

class RatingForm extends Component {
    
    state = {
        behaviorInfo: [],
        mount: true,
        newData: {},
        teacherID: '5cb8e2bd4c3e69054020ac33'
    };

    //Post each student's data to the database
    //Show a modal when student data has been saved and reset radio buttons

    // When the component mounts, load all students and save them to this.state.behaviorInfo
    componentDidMount() {
        let id = this.state.teacherID;
        this.loadBehaviors(id);
    };

    // Loads all students and sets them to this.state.behaviorInfo
    loadBehaviors = (id) => {
        API.getBehaviors(id)
            .then(res => this.setState({ behaviorInfo: res.data }))
            .catch(err => console.log(err));
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        //Save the value to check if it is an empty string (or, for our purposes, null)- in which case we will not update the state
        let isItNull = event.target.value;
        if (isItNull === '') {
            const { name } = event.target;
            this.setState({
                newData: {
                    ...this.state.newData,
                    [name]: null
                }
            });
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

    saveData = event => {
        event.preventDefault();
        console.log('The current state as of the button click is: ', this.state);
        //The newData object looks like this:
        //newData: { 'behaviorID1: rating'}
        const now = moment().format('MM/DD/YYYY');
        console.log(now);
        const dataToSave = this.state.newData;
        console.log(dataToSave);
        
        //Loop through each rating to update each behavior
        for (let i = 0; i < this.state.behaviorInfo.behaviors.length; i++) {
            //Get the behaviorID
            const bxId = this.state.behaviorInfo.behaviors[i]._id;
            console.log(bxId);

            console.log(this.state.newData[bxId]); //Returns the value associated with the key bxId

            //If the behavior was rated, proceed (if it was not or was rated N/A, this.state.newData[bxId] would return the falsy values 'undefined' or 'null')
            if (this.state.newData[bxId]) {
                console.log('This behavior was rated');
                const rating = this.state.newData[bxId];
                console.log(`Rating: ${rating}`);
                let dataToSend = {};
                if (rating === 0) {
                    console.log('Now you need to create the data to send with the API call WITHOUT incrementing the rating');
                    dataToSend = {
                        behaviorDate: now, //Needs to be here in case this is the first behavior rated a particular day- but this is the findOne part of the update otherwise...
                        behaviorTracking: {behaviorValue: rating},//There is a default for behaviorTime... so I don't think it has to be included... but could be wrong...
                        behaviorCount: 1 //CHANGE THIS TO INCREMENT BY ONE
                    };
                } else if (rating === 1) {
                    console.log('Now you need to create the data to send with the API call WITH incrementing the rating');
                    dataToSend = {
                        behaviorDate: now, //Needs to be here in case this is the first behavior rated a particular day- but this is the findOne part of the update otherwise...
                        behaviorTracking: {behaviorValue: rating},//There is a default for behaviorTime... so I don't think it has to be included... but could be wrong...
                        behaviorCount: 1, //CHANGE THIS TO INCREMENT BY ONE 
                        behaviorTotal: 1 //CHANGE THIS TO INCREMENT BY ONE
                    };
                } else {
                    console.log('Something went wrong with that logic!');
                };
                console.log(dataToSend);
                
                //FINALLY, make the API call to saveData
                //     API.saveData({ send the query for findOneAndUpdate, send the updates, etc. })
                //     .then(res => console.log('Ratings Saved!'))
                //     .catch(err => console.log(err));

            } else {
                console.log('A behavior was not rated or had a value of null.');
            };
        };
        
    //Move what is below to be a callback function after the API calls are done
        //Resets the state to an empty object for newData
        //Setting mount to false will render a message that the data has been saved and a button to rate students again
        this.setState({ newData: {}, mount: false });
    };

    remount = (event) => {
        event.preventDefault();
        this.setState({ mount: true })
    }

    render() {
        return (
            <>
            {(this.state.mount) ? (
            <main>      
                {/* <!-- Tables --> */}
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <div className="card">
                                <table id="table-custom-elements" className="row-border" cellSpacing="0" width="100%">
                                    <thead>
                                        <tr>
                                            <th>Student ID</th>
                                            <th>Name</th>
                                            <th>Behavior</th>
                                            <th>Rating</th>
                                        </tr>
                                    </thead>
                                    {(this.state.behaviorInfo.behaviors) ? (
                                    <tbody>
                                        {this.state.behaviorInfo.behaviors.map(behaviors => (
                                        <tr key={behaviors._id}>
                                            <td>{behaviors.student}</td>
                                            <td>{behaviors.studentName}</td>
                                            <td>{behaviors.behaviorName}</td>
                                            <td>
                                                <form id={behaviors._id} name='rating' onChange={this.handleInputChange}>
                                                {/* handle input change will get passed here- use the behaviorID and the value to the handle change */}
                                                    <label>
                                                        <input className="with-gap" id='Met' value={1} name={behaviors._id} type="radio" />
                                                        <span>Met</span>
                                                    </label>    
                                                    <label>
                                                        <input className="with-gap" id="Not-Met" value={0} name={behaviors._id} type="radio" />
                                                        <span>Not Met</span>
                                                    </label>
                                                    <label>
                                                        <input className="with-gap" id="N/A" value={''} name={behaviors._id} type="radio" />
                                                        <span>N/A</span>
                                                    </label>
                                                </form>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                    ) : 
                                    (<tbody>
                                        <tr>
                                            <td>You do not have any student behaviors to rate.</td>
                                        </tr>
                                    </tbody>)
                                    }                    
                                </table>
                                <button className="waves-effect waves-light btn-small" id="saveData" onClick={this.saveData}>Save Data</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>) : (
                <>
                <h1>Ratings Saved!</h1>
                <button onClick={this.remount}>Click to Rate Again!</button>
                </>
            )};
        </>
        );
    };
};

export default RatingForm;
