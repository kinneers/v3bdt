import axios from "axios";
import {Auth} from "aws-amplify";

function getSession () {
    Auth.currentSession().then(data => {
        return data.accessToken && data.accessToken.jwtToken;
    })
}

export default {

    //Get Cognito config
    getConfig: function() {
        return axios.get('/auth/config');
    },

    //Register User
    registerUser: function(body) {
        return axios.post('/auth/register', body);
    },

    //Login User
    loginUser: function(body) {
        return axios.post('/auth/login', body);
    },

    //Logout User
    logoutUser: async function () {
        const currentUser = Auth.userPool.getCurrentUser();
        if (!currentUser) return;
        await currentUser.signOut();
        window.localStorage.clear();
    },

    associateUser: function(email, accesstoken) {
        getSession();
        return axios({
            url: "/api/teacher/a/" + email,
            headers: {
                'Content-Type': 'application/json',
                accesstoken 
            },
            method: 'get'
        });
    },

    // Gets all behaviors' basic info (behaviorID, behavior, studentID, name) ref'd to a teacher
    getBehaviors: function(id, accesstoken) {
        return axios({
            url: "/api/teacher/behaviors/" + id,
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'get'
        });
    },

    // Gets all behaviors
    getAllBehaviors: function(accesstoken) {
        return axios({
            url: "/api/teacher/behaviors/",
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'get'
        });
    },

    // Gets an individual student's data
    findStudentById: function(id, accesstoken) {
        return axios({
            url: "/api/teacher/student/" + id,
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'get'
        });
    },

    //Gets the data associated with a given behaviorID
    getChartData: function(id, accesstoken) {
        return axios({
            url: "/api/teacher/chartdata/" + id,
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'get'
        });
    },

    //Saves the rating data associated with a given behaviorID
    saveData: function(data, accesstoken) {
        return axios({
            data: data,
            url: "/api/teacher/saveratings",
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'put'
        });
    }
    
};