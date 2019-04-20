import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Login from './pages/Login';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import Admin from './pages/Admin';
import Authenticator from './components/Auth';

class App extends Component {

    state = {
        chartBx: ''
    };

    render() {
        return (
            <Router>
                <Switch>
                    <Authenticator>
                    <Route exact path="/login" component={Login} />
                    {/* <Route exact path="/" render={() => <Login {...this.props}/>} /> */}
                    <Route exact path="/teacher" component={Teacher} />
                    <Route exact path="/student" component={Student} />
                    <Route exact path="/admin" component={Admin} />
                    {/* <Route component={Login} /> */}
                    </Authenticator>
                </Switch>
            </Router>
        );
    }
}

export default App;
