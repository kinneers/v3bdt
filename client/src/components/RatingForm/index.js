import React, { Component } from 'react';
import './style.css';
//import BehaviorRateRow from './../BehaviorRateRow';
//import API from './../../utils/API';

class RatingForm extends Component {
    
    state = {
        behaviorInfo: [{ studentID: 1, name: 'Bad Billy', behavior: 'Do not pick your nose!', behaviorID: 1 },
                        { studentID: 2, name: 'Silly Sarah', behavior: "Don't be so silly!", behaviorID: 2 }],
        //behaviorInfo: [],
        newData: []
    };

    componentDidMount() {
        console.log(this.state.behaviorInfo);
    }

    //Create get request for this teacher's behaviors' IDs, names, behaviors
    //Set state for behaviorInfo to this teacher's student data
    //Create onClick to gather each student's data
    //Post each student's data to the database
    //Show a modal when student data has been saved and reset radio buttons

    // // When the component mounts, load all students and save them to this.state.behaviorInfo
    // componentDidMount() {
    //     this.loadBehaviors();
    // };

    // // Loads all students and sets them to this.state.behaviorInfo
    // loadBehaviors = () => {
    //     API.getBehaviors()
    //         .then(res => this.setState({ behaviorInfo: res.data }))
    //         .catch(err => console.log(err));
    // };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        //Gathers the current state of the new Data
        const prevData = this.state.newData;
        //Gets the name and value of the target that changed
        const { name, value } = event.target;
        //Sets newestData to an object with a key of the name (behaviorID) and value of the value (rating) of the current target
        const newestData = {[name]: value}
        //Gets the key of the newest data value
        const arrayDataKey = Object.keys(newestData);
        const newestDataKey = arrayDataKey[0];
        //Gets the value of the newest data value
        const newestKeyValue = newestData[Object.keys(newestData)];
        console.log('Newest Data: ', newestData);
        console.log('The key of Newest Data: ', newestDataKey);
        console.log('The value of Newest Data: ', newestKeyValue);
        console.log('Previous Data: ', prevData);
        //Initializes an array to store keys
        let prevKeysArray =[];
        for (let i = 0; i < prevData.length; i++) {
            //Gathers the value of the object's key at each iteration
            let keyInArray = Object.keys(prevData[i]);
            //Pushes the value of the object's key to the previous keys array
            prevKeysArray.push(...keyInArray);
            //Checks if the newest data's key is already in the prevKeysArray
            if (prevKeysArray.includes(newestDataKey)) {
                console.log('This key is already in the array')
                //Get the index of this in the array
                //Create logic to update the existing key in the state
            } else {
                this.setState({
                    newData: [...prevData, newestData]
                });
            }
        }
    };

//   // When the form is submitted, use the API.saveData method to save the bx data
//   // Then reset form
    saveData = event => {
        event.preventDefault();
        console.log('Button Clicked!');
        console.log(this.state);

        //If the value is '', do nothing

//     if (this.state.value) {
//       API.saveData({
//         behaviorID: this.state.behaviorID,
//         value: this.state.value,
//       })
//         .then(res => this.loadBehaviors())
//         .catch(err => console.log(err));
//     }
        this.setState({ newData: [] })
    };

    render() {
        return (
            <main>
                <div className="card-content">
                    <h6 id="title">Content</h6>
                    <canvas className="card-chart" id="ourAmazingChart" width="400" height="100"></canvas>
                </div>
                    
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
                                    {(this.state.behaviorInfo.length > 0) ? (
                                    <tbody>
                                        {this.state.behaviorInfo.map(behaviorInfo => (
                                        <tr key={behaviorInfo.behaviorID}>
                                            <td>{behaviorInfo.studentID}</td>
                                            <td>{behaviorInfo.name}</td><td>{behaviorInfo.behavior}</td>
                                            <td>
                                                <form id={behaviorInfo.behaviorID} onChange={this.handleInputChange} name='rating'>
                                                {/* handle input change will get passed here- use the behaviorID and the value to the handle change */}
                                                    <label>
                                                        <input className="with-gap" id='Met' value={1} name={behaviorInfo.behaviorID} type="radio"/>
                                                        <span>Met</span>
                                                    </label>    
                                                    <label>
                                                        <input className="with-gap" id="Not-Met" value={0} name={behaviorInfo.behaviorID} type="radio"/>
                                                        <span>Not Met</span>
                                                    </label>
                                                    <label>
                                                        <input className="with-gap" id="N/A" value={''} name={behaviorInfo.behaviorID} type="radio" defaultChecked/>
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
            </main>
        );
    };
};

export default RatingForm;
