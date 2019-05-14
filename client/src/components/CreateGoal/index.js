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
            goal: ''
        };
    };

    componentDidMount() {
        M.AutoInit();
        const accessToken = this.props.user.accessToken.jwtToken;
        //Get all students and save in state
        API.getAllStudents(accessToken)
            .then(res => this.setState({ allStudents: res.data }))
            .catch(err => console.log(err));
    }

    //Renders input form when a student has been chosen
    handleChooseStudent= (event) => {
        event.preventDefault();
        this.setState({ chosenStudentId: event.target.name, mountForm: true })
    }

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
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
                                    <td><a href="#!" onClick={this.handleChooseStudent} name={student._id} data-key={i}>{student.firstName} {student.lastName}</a></td>
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
                    <button className="waves-effect waves-light btn-small" id="createUser" onClick={this.createUser}>Save Goal</button>
                </div>
            </div>)




            
        );
    };
};

export default CreateGoal;
