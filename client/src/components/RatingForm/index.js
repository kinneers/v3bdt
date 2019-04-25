import React, { Component } from 'react';
import './style.css';
import API from './../../utils/API';
//import Moment from 'react-moment';
const moment = require('moment');

class RatingForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mount: true,
            newData: {},
        };
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
        const today = moment().format('MM/DD/YYYY');
        console.log(today);
        const dataToSave = this.state.newData;
        console.log(dataToSave);

        // let dataArray= [];
        
        //Loop through each rating to update each behavior
        for (let i = 0; i < this.props.behaviorInfo.behaviors.length; i++) {
            //Get the behaviorID
            const bxId = this.props.behaviorInfo.behaviors[i]._id;
            console.log(bxId);

            console.log(this.state.newData[bxId]); //Returns the value associated with the key bxId

            //If the behavior was rated, proceed (if it was not or was rated N/A, this.state.newData[bxId] would return the falsy values 'undefined' or 'null')
            if (this.state.newData[bxId]) {
                console.log('This behavior was rated');
                const rating = this.state.newData[bxId];
                console.log(`Rating: ${rating}`);
                let dataToSend = {};
                if (rating === '0') {
                    console.log('Now you need to create the data to send with the API call WITHOUT incrementing the rating');
                    dataToSend = {
                        behavior: bxId,
                        behaviorDate: today, //Needs to be here in case this is the first behavior rated a particular day- but this is the findOne part of the update otherwise...
                        behaviorTracking: {behaviorValue: rating}, //There is a default for behaviorTime... so I don't think it has to be included... but could be wrong...
                        behaviorCount: 1, //THIS NEEDS TO INCREMENT BY ONE
                        behaviorTotal: 0 //Increment by 0 in this particular case
                    };

                    // dataArray.push(dataToSend);
                
                } else if (rating === '1') {
                    console.log('Now you need to create the data to send with the API call WITH incrementing the rating');
                    dataToSend = {
                        behavior: bxId,
                        behaviorDate: today, //Needs to be here in case this is the first behavior rated a particular day- but this is the findOne part of the update otherwise...
                        behaviorTracking: {behaviorValue: rating},//There is a default for behaviorTime... so I don't think it has to be included... but could be wrong...
                        behaviorCount: 1, //THIS NEEDS TO INCREMENT BY ONE
                        behaviorTotal: 1 //THIS NEEDS TO INCREMENT BY ONE
                    };

                    // dataArray.push(dataToSend);

                } else {
                    console.log('Something went wrong with that logic!');
                };

                //Try sending all the info the backend needs in one req.bod
                API.saveData(dataToSend)
                    //Resets the state to an empty object for newData
                    //Setting mount to false will render a message that the data has been saved and a button to rate students again
                    .then(this.setState({ newData: {}, mount: false }))
                    .catch(err => console.log(err));

            } else {
                console.log('A behavior was not rated or had a value of null.');
            };
        };
    };
    
    remount = (event) => {
        event.preventDefault();
        this.setState({ mount: true });
    };

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
                                            <th>Name</th>
                                            <th>Behavior</th>
                                            <th>Rating</th>
                                        </tr>
                                    </thead>
                                    {(this.props.behaviorInfo.behaviors) ? (
                                    <tbody>
                                        {this.props.behaviorInfo.behaviors.map(behaviors => (
                                        <tr key={behaviors._id}>
                                            <td>{`${behaviors.student.firstName} ${behaviors.student.lastName}`}</td>
                                            <td>{behaviors.behaviorName}</td>
                                            <td>
                                                <form id={behaviors._id} name='rating' onChange={this.handleInputChange}>
                                                {/* handle input change will get passed here- use the behaviorID and the value to the handle change */}
                                                     <label>
                                                        <input id='Met'  value={1} name={behaviors._id} type="radio" />
                                                        <span className="bspace"  >Met</span>
                                                        
                                                    </label>    
                                                    <label>
                                                        <input id="Not-Met"  value={0} name={behaviors._id} type="radio" />
                                                        <span className="bspace">Not Met</span>
                                                    </label>
                                                    <label>
                                                        <input id="N/A" value={''} name={behaviors._id} type="radio" />
                                                        <span className="bspace">N/A</span>
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
