import axios from "axios";

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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjkzODIwODU1LTYzNjUtMTFlOS1iMmIwLTJkNWZhNTQ0NzMzMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3NjIzNTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTc2NTk1MywiaWF0IjoxNTU1NzYyMzUzLCJqdGkiOiIyYzI4NmNmYi05NmU2LTQ1YjUtOWZiMS0xNjNhNjlkZGM5ODYiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.U7Rmv7Jkn9jmL0SuIjjiB644zHe11ztTuGk-W-am1DhblThypVTTElhVQx1X9cy0GVIeblc6tlk974nepGCEsd7_SvsE-jChTexM1QgCBX9oZXtn06CSqsYgsf3O3YwWG5gqiqOEL8HuMSYnTyEGxshVS05G7FmQziHQDUcxTyNUXh2J4fgf4_nw0KKLXh9kRacOciy6cLrEDe6xmaeD0QvjJNyzUB6Bv7YwI7U_4xOver6vciU83-5ogq1FKu9ze50nSSKTbVrWdUdY6vFQbTkMnqGL0HW2xEMWc9f4Bbm4kPx3mMrtKFq4SabC32t7gznVsrK-pdhReqkwtjYlEQ"
            },
            method: 'get'
        });
    },

    // Gets all behaviors
    getAllBehaviors: function() {
        return axios({
            url: "/api/teacher/behaviors/",
            headers: {
                'Content-Type': 'application/json',
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjkzODIwODU1LTYzNjUtMTFlOS1iMmIwLTJkNWZhNTQ0NzMzMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3NjIzNTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTc2NTk1MywiaWF0IjoxNTU1NzYyMzUzLCJqdGkiOiIyYzI4NmNmYi05NmU2LTQ1YjUtOWZiMS0xNjNhNjlkZGM5ODYiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.U7Rmv7Jkn9jmL0SuIjjiB644zHe11ztTuGk-W-am1DhblThypVTTElhVQx1X9cy0GVIeblc6tlk974nepGCEsd7_SvsE-jChTexM1QgCBX9oZXtn06CSqsYgsf3O3YwWG5gqiqOEL8HuMSYnTyEGxshVS05G7FmQziHQDUcxTyNUXh2J4fgf4_nw0KKLXh9kRacOciy6cLrEDe6xmaeD0QvjJNyzUB6Bv7YwI7U_4xOver6vciU83-5ogq1FKu9ze50nSSKTbVrWdUdY6vFQbTkMnqGL0HW2xEMWc9f4Bbm4kPx3mMrtKFq4SabC32t7gznVsrK-pdhReqkwtjYlEQ"
            },
            method: 'get'
        });
    },

    // Gets an individual student's data
    findStudentById: function(id) {
        return axios({
            url: "/api/teacher/student/" + id,
            headers: {
                'Content-Type': 'application/json',
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjkzODIwODU1LTYzNjUtMTFlOS1iMmIwLTJkNWZhNTQ0NzMzMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3NjIzNTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTc2NTk1MywiaWF0IjoxNTU1NzYyMzUzLCJqdGkiOiIyYzI4NmNmYi05NmU2LTQ1YjUtOWZiMS0xNjNhNjlkZGM5ODYiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.U7Rmv7Jkn9jmL0SuIjjiB644zHe11ztTuGk-W-am1DhblThypVTTElhVQx1X9cy0GVIeblc6tlk974nepGCEsd7_SvsE-jChTexM1QgCBX9oZXtn06CSqsYgsf3O3YwWG5gqiqOEL8HuMSYnTyEGxshVS05G7FmQziHQDUcxTyNUXh2J4fgf4_nw0KKLXh9kRacOciy6cLrEDe6xmaeD0QvjJNyzUB6Bv7YwI7U_4xOver6vciU83-5ogq1FKu9ze50nSSKTbVrWdUdY6vFQbTkMnqGL0HW2xEMWc9f4Bbm4kPx3mMrtKFq4SabC32t7gznVsrK-pdhReqkwtjYlEQ"
            },
            method: 'get'
        });
    },

    //Gets the data associated with a given behaviorID
    getBehaviorData: function(id) {
        return axios({
            url: "/api/teacher/behaviorchart/" + id,
            headers: {
                'Content-Type': 'application/json',
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjkzODIwODU1LTYzNjUtMTFlOS1iMmIwLTJkNWZhNTQ0NzMzMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3NjIzNTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTc2NTk1MywiaWF0IjoxNTU1NzYyMzUzLCJqdGkiOiIyYzI4NmNmYi05NmU2LTQ1YjUtOWZiMS0xNjNhNjlkZGM5ODYiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.U7Rmv7Jkn9jmL0SuIjjiB644zHe11ztTuGk-W-am1DhblThypVTTElhVQx1X9cy0GVIeblc6tlk974nepGCEsd7_SvsE-jChTexM1QgCBX9oZXtn06CSqsYgsf3O3YwWG5gqiqOEL8HuMSYnTyEGxshVS05G7FmQziHQDUcxTyNUXh2J4fgf4_nw0KKLXh9kRacOciy6cLrEDe6xmaeD0QvjJNyzUB6Bv7YwI7U_4xOver6vciU83-5ogq1FKu9ze50nSSKTbVrWdUdY6vFQbTkMnqGL0HW2xEMWc9f4Bbm4kPx3mMrtKFq4SabC32t7gznVsrK-pdhReqkwtjYlEQ"
            },
            method: 'get'
        });
    }
};