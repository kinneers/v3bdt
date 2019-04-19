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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6ImUxY2RlZGYwLTYyZGItMTFlOS1iMmIwLTJkNWZhNTQ0NzMzMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3MDMyMTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTcwNjgxMywiaWF0IjoxNTU1NzAzMjEzLCJqdGkiOiIzZGQ0ZmM5Yy0wZjA1LTRkZGUtOWU5Ny1kYTE5NjA5Y2JhODgiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.jqXR5Ly8qjqmypojk05yduzknYZiu9BVKZInGnpCCT6ZtiTq8P2Nc2lifJAr10af8DK7ZoAuNxfYu9mSmG_Y3XjYfcmXAiK1wnt1M8u-1qgLoNda27WhLV2ArFkgbRps7fwEX3V_BuXavjJU_1B1tX4pE4m-kKkK5KIlpuv1BXOK3QXxTCVvSm8MYiR8KEgN4ehcumc8diKaCRwQJna7V6IaLVJIyu46HGfgwq_dotijYb5W9cyyHrN_TQFkzP9w7uZuddI4d2EMY6ADRBsmaJhXzLuDwYQGpF856VhjWPQHo36_qD4rB8lqNC3ylq_KKk704bFIFHh8Y-hdYbHgKA"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6ImUxY2RlZGYwLTYyZGItMTFlOS1iMmIwLTJkNWZhNTQ0NzMzMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3MDMyMTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTcwNjgxMywiaWF0IjoxNTU1NzAzMjEzLCJqdGkiOiIzZGQ0ZmM5Yy0wZjA1LTRkZGUtOWU5Ny1kYTE5NjA5Y2JhODgiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.jqXR5Ly8qjqmypojk05yduzknYZiu9BVKZInGnpCCT6ZtiTq8P2Nc2lifJAr10af8DK7ZoAuNxfYu9mSmG_Y3XjYfcmXAiK1wnt1M8u-1qgLoNda27WhLV2ArFkgbRps7fwEX3V_BuXavjJU_1B1tX4pE4m-kKkK5KIlpuv1BXOK3QXxTCVvSm8MYiR8KEgN4ehcumc8diKaCRwQJna7V6IaLVJIyu46HGfgwq_dotijYb5W9cyyHrN_TQFkzP9w7uZuddI4d2EMY6ADRBsmaJhXzLuDwYQGpF856VhjWPQHo36_qD4rB8lqNC3ylq_KKk704bFIFHh8Y-hdYbHgKA"
            },
            method: 'get'
        });
    }
};