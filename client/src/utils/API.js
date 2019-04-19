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

    // Gets all behaviors' basic info (behaviorID, behavior, studentID, name) ref'd to a teacher
    getBehaviors: function(id) {
        return axios({
            url: "/api/teacher/behaviors/" + id,
            headers: {
                'Content-Type': 'application/json',
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6Ijc3YTNhOTUzLTYyNTQtMTFlOS04NWI2LTc3MDQyNGYzMmEzMSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU2NDUwNTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTY0ODY1MywiaWF0IjoxNTU1NjQ1MDUzLCJqdGkiOiI2YjRhMTY0OC04ZjQ0LTRhNDMtODBkNS04NGQ4MDBjZTYxZGIiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.FFA7IFqs-pn7JO_7SJvjw6Zx8eZEhVpkNayaO5XwK4aIxmODHkwlQjA5aDGph8fPLdig-xw2cgM04ii-vyr9Ok20fhbIkc6gZ9YNseIiKMx7lk-I6oDI8ZNWo27p_dsOy4Pb9m9xXC4IJEi7t0JiUoIfZDAuoqmJjGVucviWflRH-BmsN8MG5o_VWqy4u-DZsR8F2RBX_cBACb6-liwxr0UDhuocBL1PYaRekuBxdTlMLyUyc15asFQhWyPjmjpE5EGq9SRLHEvvsnSc9GKTmW2OUei-r5nq2IiB2FtHnomcdLNjb6r9c9rbrTcdeP0R7dwy2Iv2RJhjKTZpnEAtgQ"
            },
            method: 'get'
        });
    },

    // Gets all students' basic info ref'd to a teacher
    getStudents: function(id) {
        return axios({
            url: "/api/teacher/students/" + id,
            headers: {
                'Content-Type': 'application/json',
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6Ijc3YTNhOTUzLTYyNTQtMTFlOS04NWI2LTc3MDQyNGYzMmEzMSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU2NDUwNTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTY0ODY1MywiaWF0IjoxNTU1NjQ1MDUzLCJqdGkiOiI2YjRhMTY0OC04ZjQ0LTRhNDMtODBkNS04NGQ4MDBjZTYxZGIiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.FFA7IFqs-pn7JO_7SJvjw6Zx8eZEhVpkNayaO5XwK4aIxmODHkwlQjA5aDGph8fPLdig-xw2cgM04ii-vyr9Ok20fhbIkc6gZ9YNseIiKMx7lk-I6oDI8ZNWo27p_dsOy4Pb9m9xXC4IJEi7t0JiUoIfZDAuoqmJjGVucviWflRH-BmsN8MG5o_VWqy4u-DZsR8F2RBX_cBACb6-liwxr0UDhuocBL1PYaRekuBxdTlMLyUyc15asFQhWyPjmjpE5EGq9SRLHEvvsnSc9GKTmW2OUei-r5nq2IiB2FtHnomcdLNjb6r9c9rbrTcdeP0R7dwy2Iv2RJhjKTZpnEAtgQ"
            },
            method: 'get'
        });
    }
};