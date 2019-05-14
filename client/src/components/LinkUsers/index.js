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
            accessToken: '',
            allTeachers: [],
            allStudents: [],
            unlinked: [],
            alreadyLinked: [],
            mount: true,
        };
    };

    componentDidMount() {
        M.AutoInit();
        const accessToken = this.props.user.accessToken.jwtToken;
        this.setState({ accessToken: accessToken });
        this.updateTeachersAndStudents(accessToken);
    };

    updateTeachersAndStudents= (accessToken) => {
        //Get all teachers and save in state
        API.getAllTeachers(accessToken)
            .then(res => this.setState({ allTeachers: res.data }))
            .catch(err => console.log(err));

        //Get all students and save in state
        API.getAllStudents(accessToken)
            .then(res => this.setState({ allStudents: res.data }))
            .catch(err => console.log(err));
    }

    handleChooseTeacher = event => {
        event.preventDefault();
        //Get the index of the currently selected teacher in the allTeachers array
        let teacherIndex = event.target.getAttribute('data-key');
        //Set the state for the currently selected teacher
        this.setState({ chosenTeacherId: event.target.name, chosenTeacherName: event.target.text, chosenTeacherIndex: event.target.getAttribute('data-key') });
        console.log(this.state);
        //Copy the allStudents array and the array of students already linked to this teacher
        const allStudentsArray = [...this.state.allStudents];
        const thisTeachersStudents = [...this.state.allTeachers[teacherIndex].students];
        //Initialize arrays for unlinked and already linked students
        let unlinkedStudents = [];
        let alreadyLinkedStudents = [];
        //Loop through the array of all students
        for (let i = 0; i < allStudentsArray.length; i++) {
            //If the current student is not in this teacher's array, push to unlinked students array
            if (!thisTeachersStudents.includes(allStudentsArray[i]._id)) {
                unlinkedStudents.push(allStudentsArray[i]);
            } else {
                //Otherwise push to already linked students array
                alreadyLinkedStudents.push(allStudentsArray[i]);  
            };
        };
        //Set the state for unlinked and linked students
        this.setState({ unlinked: unlinkedStudents, alreadyLinked: alreadyLinkedStudents});
    };

    handleChooseStudent = event => {
        event.preventDefault();
        let studentId = event.target.name;
        this.linkUsers(studentId);
    };

    linkUsers = (id) => {
        //Create an object containing the teacher and student ids to be linked
        const idsToLink = { chosenTeacher: this.state.chosenTeacherId, chosenStudent: id}
        console.log(idsToLink);
        //Set accessToken
        const accessToken = this.props.user.accessToken.jwtToken;

        API.linkStudentToTeacher(idsToLink, accessToken)
            .then(res => console.log('Student Linked to teacher.  Data: ', res.data))
            .catch(err => console.log(err));

        API.linkTeacherToStudent(idsToLink, accessToken)
            .then(res => console.log('Teacher linked to student.  Data: ', res.data))
            .catch(err => console.log(err));

        //Push the newly linked student to currently linked students
        //(For now, that student will stay in the unlinked list... will be removed later, once MVP is complete)
        let currentLinked = this.state.alreadyLinked;
        currentLinked.push(id);
        this.setState({ alreadyLinked: currentLinked });

        this.setState({
            chosenTeacherId: '',
            chosenTeacherName: '',
            chosenTeacherIndex: '',
            chosenStudentId: '',
            unlinked: [],
            alreadyLinked: []
        });

        this.updateTeachersAndStudents(accessToken);
    };

    //Called after 'link users'- sets mount to true in state in order to conditionally render component
    remount = (event) => {
        event.preventDefault();
        this.setState({ mount: true });
    };
    
    
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
