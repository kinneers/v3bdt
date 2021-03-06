import axios from "axios";
import {Auth} from "aws-amplify";

// function getSession () {
//     Auth.currentSession().then(data => {
//         console.log('THE ACCESSTOKEN BEING RETURNED IS: ', data.accessToken)
//         return data.accessToken && data.accessToken.jwtToken;
//     })
// }

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
        return axios({
            url: "/api/pageroutes/a/" + email,
            headers: {
                'Content-Type': 'application/json',
                accesstoken 
            },
            method: 'get'
        });
    },

    associateTeacher: function(email, accesstoken) {
        return axios({
            url: "/api/teacher/a/" + email,
            headers: {
                'Content-Type': 'application/json',
                accesstoken 
            },
            method: 'get'
        });
    },

    associateAdmin: function(email, accesstoken) {
        return axios({
            url: "/api/admin/a/" + email,
            headers: {
                'Content-Type': 'application/json',
                accesstoken 
            },
            method: 'get'
        });
    },

    associateStudent: function(email, accesstoken) {
        return axios({
            url: "/api/student/a/" + email,
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

    //Gets all behaviors' basic info (behaviorID, behavior, name, data, etc.) ref'd to a student
    getStudentBehaviors: function(id, accesstoken) {
        return axios({
            url: "/api/student/behaviors/" + id,
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'get'
        })
    },

    // Gets all behaviors (for admin use)
    getAllBehaviors: function(accesstoken) {
        return axios({
            url: "/api/admin/behaviors/",
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
    },

    //Adds a new user to the user collection
    addNewUser: function(data, accesstoken) {
        return axios({
            data: data,
            url: "api/admin/adduser",
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'post'
        });
    },

    //Adds a new user to the admin collection
    addNewAdmin: function(data, accesstoken) {
        return axios({
            data: data,
            url: "api/admin/addnewadmin",
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'post'
        });
    },

    //Adds a new user to the teacher collection
    addNewTeacher: function(data, accesstoken) {
        return axios({
            data: data,
            url: "api/admin/addnewteacher",
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'post'
        });
    },

    //Adds a new user to the student collection
    addNewStudent: function(data, accesstoken) {
        return axios({
            data: data,
            url: 'api/admin/addnewstudent',
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'post'
        });
    },

    // Gets all teachers (for admin use)
    getAllTeachers: function(accesstoken) {
        return axios({
            url: '/api/admin/getallteachers/',
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'get'
        });
    },

    // Gets all students (for admin use)
    getAllStudents: function(accesstoken) {
        return axios({
            url: 'api/admin/getallstudents/',
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'get'
        });
    },

    linkStudentToTeacher: function(data, accesstoken) {
        return axios({
            data: data,
            url: 'api/admin/linkstudenttoteacher',
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'put'
        });
    },

    linkTeacherToStudent: function(data, accesstoken) {
        return axios({
            data: data,
            url: 'api/admin/linkteachertostudent',
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'put'
        });
    },

    createGoal: function(data, accesstoken) {
        return axios({
            data: data,
            url: 'api/admin/creategoal',
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'post'
        });
    },

    sendBxToStudent: function(data, accesstoken) {
        return axios({
            data: data,
            url: 'api/admin/sendbxtostudent/' + data.student,
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'put'
        });
    },

    sendBxToTeacher: function(data, accesstoken) {
        return axios({
            data: data,
            url: 'api/admin/sendbxtoteacher/' + data.teacher,
            headers: {
                'Content-Type': 'application/json',
                accesstoken
            },
            method: 'put'
        });
    }
};