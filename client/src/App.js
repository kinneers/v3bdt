import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import Admin from './pages/Admin';
import Authenticator from './components/Auth';

const Routes = props => {
    return(
        props.isAuthenticated || props.user ? (
            <React.Fragment>
                <Route exact path="/teacher" render={() => <Teacher {...props} />} />
                <Route exact path="/student" component={Student} />
                <Route exact path="/admin" render={() => <Admin {...props} />} />
            </React.Fragment>
        ) : (<Route render={() => <Login {...props} />} />)
    )
}
class App extends Component {

    state = {
        user: null
    };

    componentWillMount() {
        window.localStorage.clear();
        // const email = this.props.user._id;
        // const accessToken = this.props.user.accessToken;
        // const idToken = this.state.idToken;
        // const refreshToken = this.state.refreshToken;
    //     const email = window.localStorage.getItem("email");
    //     const accessToken = window.localStorage.getItem("accessToken");
    //     const idToken = window.localStorage.getItem("idToken");
    //     const refreshToken = window.localStorage.getItem("refreshToken");
    //     console.log(accessToken);
        // if (email && accessToken !== "undefined" && !this.state.user) {
        //     API.associateTeacher(email, accessToken).then(({data}) => {
        //         this.setState({user: {
        //             accessToken: {jwtToken: accessToken}, idToken: {jwtToken: idToken}, refreshToken: {token: refreshToken}, ...data
        //         }})
        //     })
            
        // }
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        // if (prevState.user._id !== this.state.user._id) {
        //     API.associateTeacher(this.state.user.userName, this.state.user.accessToken.jwtToken).then(({data})=>{
        //         this.handleUser(...this.state.user, ...data)
        //     })
        // }
    //     if (!prevState.user) {
    //         if (this.state.user && this.state.user.userName) {
    //             window.localStorage.setItem("email", this.state.user.userName)
    //             window.localStorage.setItem("accessToken", this.state.user.accessToken.jwtToken)
    //             window.localStorage.setItem("idToken", this.state.user.idToken.jwtToken)
    //             window.localStorage.setItem("refreshToken", this.state.user.refreshToken.token)
    //         }
    //     }
    }

    handleUser = (user) => {
        this.setState({ user });
    }

    render() {
        const passedProps = {
            user: this.state.user,
            handleUser: this.handleUser,
            ...this.props
        }

        return (
            <Router>
                <Switch>
                    <Authenticator handleUser= {this.handleUser} >
                       <Routes {...passedProps} />
                    </Authenticator>
                </Switch>
            </Router>
        );
    }
}

export default App;
