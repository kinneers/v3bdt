import axios from "axios";

const accToken = "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxNjA2ZWZmMy1lMmQ4LTQ1ODAtYjIyOS05MzZhYWRmMDdhOTciLCJldmVudF9pZCI6IjU1MzY1MjEzLTY2OWUtMTFlOS04NjgxLWI1Nzc0ODgzYTIzNCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTYxMTY1ODMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NjEyMDE4MywiaWF0IjoxNTU2MTE2NTgzLCJqdGkiOiI4YjI5MmNlYy04Y2I0LTQzMjItYTA2NS1kMjk3NWJjNTE2ODUiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxNjA2ZWZmMy1lMmQ4LTQ1ODAtYjIyOS05MzZhYWRmMDdhOTcifQ.FQ1C_OD11DlEz8CBAtV18sF34pS7kBEDxanQxtGWYrh-rDuLgPCIZVKwwVDRaUYxUhgJvT5nbzi04dalqsNfWfoUFb0F3dbJWRQNvx95o-cWVGSEqAC_uXwbAThkH6P9TfiUBw-QlT8CDZvFgCLHbW_8uFKAEdUW3PPH86h0ekqHwlDtx4BKZ6OVHpSBgx26UG2LnEgJf9lxMaR5qympW9xpnsrSLdIpYmwrfHTNFn2vmREzN0iEfHCUn6jULfaWd31F2EEnJLAO6TKxAufSHdN4lrtskk87pqMzdlxzKvgsVqki0UNujD8bEgUAHkfcgID7u0f5e5W4GuJTLW7nJQ";

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

    associateUser: function(email, accesstoken) {
        return axios({
            url: "/api/teacher/a/" + email,
            headers: {
                'Content-Type': 'application/json',
                accesstoken: accToken
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
                accesstoken: accToken
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
                accesstoken: accToken
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
                accesstoken: accToken
            },
            method: 'get'
        });
    },

    //Gets the data associated with a given behaviorID
    getBehaviorData: function(id, accesstoken) {
        return axios({
            url: "/api/teacher/behaviorchart/" + id,
            headers: {
                'Content-Type': 'application/json',
                accesstoken: accToken
            },
            method: 'get'
        });
    },

    //Saves the rating data associated with a given behaviorID
    saveData: function(id, accesstoken) {
        return axios({
            url: "/api/teacher/ratingform",
            headers: {
                'Content-Type': 'application/json',
                accesstoken: accToken
            },
            method: 'post'
        });
    }
    
};