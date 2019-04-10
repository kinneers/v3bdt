import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Login from './pages/Login';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import Admin from './pages/Admin';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/teacher" component={Teacher} />
                    <Route exact path="/student" component={Student} />
                    <Route exact path="/admin" component={Admin} />
                </div>
            </Router>
        );
    }
}

export default App;
