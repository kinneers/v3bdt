import React, { Component } from 'react';
import './style.css';
import API from './../../utils/API';
import M from "materialize-css";

class LinkUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Initialize new user values
            chosenTeacherId: '',
            chosenTeacherName: '',
            chosenTeacherIndex: '',
            chosenStudentId: '',
            allTeachers: [],
            allStudents: [],
            teacherCurrentStudents: [],
            unlinked: [],
            alreadyLinked: []
        };
    };

    componentDidMount() {
        M.AutoInit();
        const accessToken = this.props.user.accessToken.jwtToken;
        //Get all teachers and save in state
        API.getAllTeachers(accessToken)
            .then(res => this.setState({ allTeachers: res.data }))
            .catch(err => console.log(err));
        //Get all students and save in state
        API.getAllStudents(accessToken)
            .then(res => this.setState({ allStudents: res.data }))
            .catch(err => console.log(err));
    };

    handleChooseTeacher = event => {
        event.preventDefault();
        let teacherIndex = event.target.getAttribute('data-key');
        this.setState({ chosenTeacherId: event.target.name, chosenTeacherName: event.target.text, chosenTeacherIndex: teacherIndex });
        console.log(teacherIndex);
        //Get the student array for the index of this teacher

        //This is not updating as I'd expect... need to debug
        console.log('Chosen teacher index: ', this.state.chosenTeacherIndex)
        console.log(this.state.allTeachers[teacherIndex].students);
        const allStudentsArray = [...this.state.allStudents];
        const thisTeachersStudents = [...this.state.allTeachers[teacherIndex].students];
        console.log('All: ', allStudentsArray);
        console.log('This teacher: ', thisTeachersStudents);
        let unlinkedStudents = [];
        let alreadyLinkedStudents = [];

        for (let i = 0; i < allStudentsArray.length; i++) {
            if (!thisTeachersStudents.includes(allStudentsArray[i]._id)) {
                unlinkedStudents.push(allStudentsArray[i]);
            } else {
                alreadyLinkedStudents.push(allStudentsArray[i]);
            };
        };

        console.log(unlinkedStudents);
        console.log(alreadyLinkedStudents);

        this.setState({ unlinked: unlinkedStudents, alreadyLinked: alreadyLinkedStudents});
    };

    handleChooseStudent = event => {
        event.preventDefault();
        let studentId = event.target.name;
        this.linkUsers(studentId);
    };

    linkUsers = (id) => {

        console.log('TeacherID: ', this.state.chosenTeacherId);
        console.log('This teacher index in state is: ', this.state.chosenTeacherIndex)
        console.log('StudentID: ', id);
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
            {(this.state.chosenTeacherIndex !== '') ? (
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <table id="table-custom-elements" className="row-border" cellSpacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th colSpan='2'>Teacher: {this.state.chosenTeacherName}</th>
                                    </tr>
                                    <tr>
                                        <th>Currently Linked Students</th>
                                        <th>Click a Student Name to Add to this Teacher's List</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='list'>
                                            <ul>
                                            {this.state.alreadyLinked.map(student =>
                                                <li key={student._id}>{student.firstName} {student.lastName}</li>
                                            )}
                                            </ul>
                                        </td>
                                        <td className='list'>
                                            <ul>
                                            {this.state.unlinked.map(student => 
                                                <li key={student._id}><a href="#!" onClick={this.handleChooseStudent} name={student._id}>{student.firstName} {student.lastName}</a></li>
                                            )}
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> 
                    </div>
                </div>
            ) : (
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <table id="table-custom-elements" className="row-border" cellSpacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th>Choose a Teacher: </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.allTeachers.map((teacher , i) => (
                                    <tr key={i}>
                                        <td><a href="#!" onClick={this.handleChooseTeacher} name={teacher._id} data-key={i}>{teacher.firstName} {teacher.lastName}</a></td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
                </div>
        );
    };
};

export default LinkUsers;
