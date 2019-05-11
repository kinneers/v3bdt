import React, { Component } from 'react';
import './style.css';
import API from './../../utils/API';
import M from "materialize-css";

class LinkUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Initialize new user values
            chosenTeacher: '',
            chosenStudent: '',
            allTeachers: [],
            allStudents: [],
            teacherChosen: false
        };
    };

    componentDidMount() {
        M.AutoInit();
        const accessToken = this.props.user.accessToken.jwtToken;
        console.log(accessToken);
        //Get all teachers, their ids, and save in state
        API.getAllTeachers(accessToken)
            .then(res => this.setState({ allTeachers: res.data }))
            .catch(err => console.log(err));
        //Get all students, their ids, and save in state

    }

    // // Handles updating component state when the user types into the input field
    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    // createUser = event => {
    //     event.preventDefault();
    //     console.log(`You entered first name: ${this.state.newUserFirstName}, last name: ${this.state.newUserLastName} password: ${this.state.newUserPassword}, pw check: ${this.state.newUserCheckPw}, email: ${this.state.newUserEmail}, auth level: ${this.state.newUserAuthLevel}... now you need to validate all this data, send first name, last name, auth level, email to mongoDB, and also create as a teacher, student, or admin in respective collection based on auth level... and you need to send this user through 2 factor auth with Cognito somehow.`);
        
    //     //After everything is validated, send it to mongo

    //     const newUserObject = {
    //         userName: this.state.newUserEmail,
    //         authLevel: this.state.newUserAuthLevel
    //     };
    //     console.log('NEW USER OBJECT: ', newUserObject);
    //     const addToCollectionObject = {
    //         userName: this.state.newUserEmail,
    //         authLevel: this.state.newUserAuthLevel,
    //         firstName: this.state.newUserFirstName,
    //         lastName: this.state.newUserLastName
    //     };
    //     console.log('ADD TO COLLECTION OBJECT: ', addToCollectionObject)
    //     const accessToken = this.props.user.accessToken.jwtToken;
    //     console.log('ACCESS TOKEN: ', accessToken);
    //     //Send the data to the user collection
    //     API.addNewUser(newUserObject, accessToken)
    //         .then(res => console.log('New User sent to user collection. Data: ', res.data))
    //         .catch(err => console.log(err));

    //     //Send the data to the student, teacher, or admin collection based upon authLevel
    //     if (this.state.newUserAuthLevel === 5) {
    //         console.log('Send the data to the admin collection');
    //         API.addNewAdmin(addToCollectionObject, accessToken)
    //             .then(res => {
    //                 console.log('Admin added!');
    //                 this.setState({ newUserFirstName: '',
    //                     newUserLastName: '',
    //                     newUserPassword: '', //Don't save here if we don't absolutely have to - should go to Cognito - will not go to our DB
    //                     newUserCheckPw: '',
    //                     newUserEmail: '',
    //                     newUserAuthLevel: 1
    //                 });
    //             });
    //     } else if (this.state.newUserAuthLevel === 3) {
    //         console.log('Send the data to the teacher collection');
    //         API.addNewTeacher(addToCollectionObject, accessToken)
    //             .then(res => {
    //                 console.log('Teacher added!');
    //                 this.setState({ newUserFirstName: '',
    //                     newUserLastName: '',
    //                     newUserPassword: '', //Don't save here if we don't absolutely have to - should go to Cognito - will not go to our DB
    //                     newUserCheckPw: '',
    //                     newUserEmail: '',
    //                     newUserAuthLevel: 1
    //                 });
    //             });
    //     } else if (this.state.newUserAuthLevel === 1) {
    //         console.log('Send the data to the student collection');
    //         API.addNewStudent(addToCollectionObject, accessToken)
    //             .then(res => {
    //                 console.log('Student added!');
    //                 this.setState({ newUserFirstName: '',
    //                     newUserLastName: '',
    //                     newUserPassword: '', //Don't save here if we don't absolutely have to - should go to Cognito - will not go to our DB
    //                     newUserCheckPw: '',
    //                     newUserEmail: '',
    //                     newUserAuthLevel: 1
    //                 });
    //             });
    //     } else {
    //         console.log('Error: Auth level not defined at this time.');
    //     };
    // };
    
    render() {
        return (
            <div className="container">
            {(this.state.chosenTeacher !== '') ? (
            
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <table id="table-custom-elements" className="row-border" cellSpacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>Teacher: {this.state.chosenTeacher}</th>
                                </tr>
                                <tr>
                                    <th>Currently Linked Students</th>
                                    <th>Click a Student Name to Add to this Teacher</th>
                                </tr>
                            </thead>
                            {/* {(this.props.behaviorInfo.behaviors) ? (
                            <tbody>
                                {this.props.behaviorInfo.behaviors.map(behaviors => (
                                <tr key={behaviors._id}>
                                    <td>{behaviors.studentName}</td>
                                    <td>{behaviors.behaviorName}</td>
                                    <td>
                                        <form id={behaviors._id} name='rating' onChange={this.handleInputChange}>
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
                            }                      */}
                        </table>
                        <button className="waves-effect waves-light btn-small" id="linkUsers" onClick={this.linkUsers}>Link Users</button>
                    </div> 
                </div>
            </div>
        ) : (
            <div>
                This div is currently empty.
            </div>
        )}
        </div>);
    };
};

export default LinkUsers;
