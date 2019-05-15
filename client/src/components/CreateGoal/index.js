import React, { Component } from 'react';
import './style.css';
import API from './../../utils/API';
import M from "materialize-css";

class CreateGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allStudents: [],
            mountForm: false,
            chosenStudentId: '',
            chosenStudentName: '',
            goal: '',
            allStudentsTeachers: [],
            studentIndex: ''
        };
    };

    componentDidMount() {
        M.AutoInit();
        const accessToken = this.props.user.accessToken.jwtToken;
        //Get all students and save in state
        API.getAllStudents(accessToken)
            .then(res => this.setState({ allStudents: res.data }))
            .catch(err => console.log(err));
    };

    //Renders input form when a student has been chosen
    handleChooseStudent= (event) => {
        event.preventDefault();
        let studentIndexNum = event.target.getAttribute('data-key');
        const studentName = event.target.text;
        this.setState({ chosenStudentName: studentName, chosenStudentId: event.target.name, studentIndex: studentIndexNum, mountForm: true })
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    createGoal = event => {
        event.preventDefault();
        //Build object to send data
        const behaviorName = this.state.goal;
        const studentName = this.state.chosenStudentName;
        const index = parseInt(this.state.studentIndex);
        const teachers = [...this.state.allStudents[index].teachers];
        const student = this.state.chosenStudentId;
        const dataToSend = { behaviorName, studentName, student, teachers};
        const accessToken = this.props.user.accessToken.jwtToken;
        console.log(dataToSend);
        //Create behavior goal
        API.createGoal(dataToSend, accessToken)
            .then(res => {
                //Get all teacher ids that this bx will be added to
                const teachers = [...this.state.allStudents[index].teachers];
                //Get student id for this bx to be added to
                const student = this.state.chosenStudentId;
                //Get this newly created bx id        
                const newBxId = res.data._id;
                //Save the student id and bx id in an object to be sent server-side
                const studentObject = { student, newBxId };
                //Add the new bx id to the correct student
                API.sendBxToStudent(studentObject, this.props.user.accessToken.jwtToken)
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err));
                
                //Turn the teachers array into an array of objects containing each teacher id and bx id
                let teacherObjectArray = [];
                for (let i=0; i<teachers.length; i++) {
                    let obj = { teacher: teachers[i], newBxId };
                    teacherObjectArray.push(obj);
                };

                console.log(teacherObjectArray);
                
                //Maps each object in teacherObjectArray to the API.sendToTeacher function and waits for all responses before setting state
                Promise.all(teacherObjectArray.map(obj => API.sendBxToTeacher(obj, this.props.user.accessToken.jwtToken)))
                    .then(res => this.setState({ mountForm: false }))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };
    
    render() {
        return (
            (!this.state.mountForm) ? (                
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <table id="table-custom-elements" className="row-border" cellSpacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>Choose a Student to Create a Behavior For: </th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.allStudents.map((student , i) => (
                                <tr key={i}>
                                    <td><a href="#!" onClick={this.handleChooseStudent} name={student._id} data-key={i} data-student-name={student.firstName + '' + student.lastName}>{student.firstName} {student.lastName}</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    ) : (<div className="container">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input onChange={this.handleInputChange} name="goal" id="goal" type="text" className="validate"/>
                                <label htmlFor="goal">Enter Behavioral Goal</label>
                            </div>
                        </div>
                    </form>
                    <button className="waves-effect waves-light btn-small" id="createGoal" onClick={this.createGoal}>Save Goal</button>
                </div>
            </div>)
        );
    };
};

export default CreateGoal;
