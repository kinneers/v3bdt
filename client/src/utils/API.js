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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjI0NTkzOTQ0LTY2MjktMTFlOS1iODBkLTM1ZWE3YTNjMWY5MiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTYwNjYyNTAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NjA2OTg1MCwiaWF0IjoxNTU2MDY2MjUwLCJqdGkiOiI1Zjg0YzllNS1jN2E2LTRlOGMtYWFhNS1kNjIxZTc3MjBhOTEiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.SiVX5vwBWmE8hP5jB3NdjqXsdytgqyWIZpw8xEZGoYG58lzhRjN_5-Q0jXglDhk4XFGNE_U8HK_cQU1LE5F2bPOdDTEJsevNbCEfO5p1PAK-v_0f_5MkENmfsDP7ipbtr5L31DzTHkYGpisudpq_osQ64JM_c2n_kApVodZK-gIST_cL7gnTh4iyOnpaDUPF2cQja2Q4zTbxCIhiC_1WqbZLI3gpEIq3rjS1WKee5Sw5aDRLV3cKNoc3h7NzLP_8_kYDnvfpStrRjIRLxzu9tZbaPPvHrgOueFxu1rbv2UtUJoq6KKLR0ZrHl5v_YFIfjixqb_bDQ2n18wZ7RqADJg"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjI0NTkzOTQ0LTY2MjktMTFlOS1iODBkLTM1ZWE3YTNjMWY5MiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTYwNjYyNTAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NjA2OTg1MCwiaWF0IjoxNTU2MDY2MjUwLCJqdGkiOiI1Zjg0YzllNS1jN2E2LTRlOGMtYWFhNS1kNjIxZTc3MjBhOTEiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.SiVX5vwBWmE8hP5jB3NdjqXsdytgqyWIZpw8xEZGoYG58lzhRjN_5-Q0jXglDhk4XFGNE_U8HK_cQU1LE5F2bPOdDTEJsevNbCEfO5p1PAK-v_0f_5MkENmfsDP7ipbtr5L31DzTHkYGpisudpq_osQ64JM_c2n_kApVodZK-gIST_cL7gnTh4iyOnpaDUPF2cQja2Q4zTbxCIhiC_1WqbZLI3gpEIq3rjS1WKee5Sw5aDRLV3cKNoc3h7NzLP_8_kYDnvfpStrRjIRLxzu9tZbaPPvHrgOueFxu1rbv2UtUJoq6KKLR0ZrHl5v_YFIfjixqb_bDQ2n18wZ7RqADJg"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjI0NTkzOTQ0LTY2MjktMTFlOS1iODBkLTM1ZWE3YTNjMWY5MiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTYwNjYyNTAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NjA2OTg1MCwiaWF0IjoxNTU2MDY2MjUwLCJqdGkiOiI1Zjg0YzllNS1jN2E2LTRlOGMtYWFhNS1kNjIxZTc3MjBhOTEiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.SiVX5vwBWmE8hP5jB3NdjqXsdytgqyWIZpw8xEZGoYG58lzhRjN_5-Q0jXglDhk4XFGNE_U8HK_cQU1LE5F2bPOdDTEJsevNbCEfO5p1PAK-v_0f_5MkENmfsDP7ipbtr5L31DzTHkYGpisudpq_osQ64JM_c2n_kApVodZK-gIST_cL7gnTh4iyOnpaDUPF2cQja2Q4zTbxCIhiC_1WqbZLI3gpEIq3rjS1WKee5Sw5aDRLV3cKNoc3h7NzLP_8_kYDnvfpStrRjIRLxzu9tZbaPPvHrgOueFxu1rbv2UtUJoq6KKLR0ZrHl5v_YFIfjixqb_bDQ2n18wZ7RqADJg"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjI0NTkzOTQ0LTY2MjktMTFlOS1iODBkLTM1ZWE3YTNjMWY5MiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTYwNjYyNTAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NjA2OTg1MCwiaWF0IjoxNTU2MDY2MjUwLCJqdGkiOiI1Zjg0YzllNS1jN2E2LTRlOGMtYWFhNS1kNjIxZTc3MjBhOTEiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.SiVX5vwBWmE8hP5jB3NdjqXsdytgqyWIZpw8xEZGoYG58lzhRjN_5-Q0jXglDhk4XFGNE_U8HK_cQU1LE5F2bPOdDTEJsevNbCEfO5p1PAK-v_0f_5MkENmfsDP7ipbtr5L31DzTHkYGpisudpq_osQ64JM_c2n_kApVodZK-gIST_cL7gnTh4iyOnpaDUPF2cQja2Q4zTbxCIhiC_1WqbZLI3gpEIq3rjS1WKee5Sw5aDRLV3cKNoc3h7NzLP_8_kYDnvfpStrRjIRLxzu9tZbaPPvHrgOueFxu1rbv2UtUJoq6KKLR0ZrHl5v_YFIfjixqb_bDQ2n18wZ7RqADJg"
            },
            method: 'get'
        });
    },

    //Saves the rating data associated with a given behaviorID
    saveData: function(query, newData) {
        return axios({
            url: "/api/teacher/ratingform",
            headers: {
                'Content-Type': 'application/json',
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjI0NTkzOTQ0LTY2MjktMTFlOS1iODBkLTM1ZWE3YTNjMWY5MiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTYwNjYyNTAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NjA2OTg1MCwiaWF0IjoxNTU2MDY2MjUwLCJqdGkiOiI1Zjg0YzllNS1jN2E2LTRlOGMtYWFhNS1kNjIxZTc3MjBhOTEiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.SiVX5vwBWmE8hP5jB3NdjqXsdytgqyWIZpw8xEZGoYG58lzhRjN_5-Q0jXglDhk4XFGNE_U8HK_cQU1LE5F2bPOdDTEJsevNbCEfO5p1PAK-v_0f_5MkENmfsDP7ipbtr5L31DzTHkYGpisudpq_osQ64JM_c2n_kApVodZK-gIST_cL7gnTh4iyOnpaDUPF2cQja2Q4zTbxCIhiC_1WqbZLI3gpEIq3rjS1WKee5Sw5aDRLV3cKNoc3h7NzLP_8_kYDnvfpStrRjIRLxzu9tZbaPPvHrgOueFxu1rbv2UtUJoq6KKLR0ZrHl5v_YFIfjixqb_bDQ2n18wZ7RqADJg"
            },
            method: 'post'
        });
    }
    
};