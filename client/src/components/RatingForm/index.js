import React, { Component } from 'react';
import './style.css';
import API from './../../utils/API';

class RatingForm extends Component {
    
    state = {
        behaviorInfo: [],
        newData: {},
        teacherID: '5cb7c4a675a0a16a0e3c57ed'
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

        this.setState({ newData: {} });
    };

    render() {
        return (
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
            </main>
        );
    };
};

export default RatingForm;
