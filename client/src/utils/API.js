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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6ImQ1ODgwMzIzLTYzOGQtMTFlOS1iODBkLTM1ZWE3YTNjMWY5MiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3Nzk2NDMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTc4MzI0MywiaWF0IjoxNTU1Nzc5NjQzLCJqdGkiOiJhMTJhY2FlZS0xNzZlLTRjZDItYTZjMS0xYmUyZWM0NjRjZDgiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.Yy6FP7jGhcfkYNxlF31TQCVEW5NOH2plJcGCilasezHp3UTJRkaMVwmTBVaPqS_BjRxbrxz5FzoXxichXliw68PLJyYHtUIoN7kZfVRi1w6K1KhiEal7MSmrZa0p055APDw3bpA1_H5Ym5lkGRj_Ax92maNM9Mft8T3skpkxSEL327GBOwc0YBqTCHsIf-IO6TLauN2MckQA3mngfk7H_w2UEdiZpm5i8oz-L69PRey5KvmIQ_5GpIjfRWtJZEiUsKqDmwFLRZRgAaY2H2OLHLI2RUq7087EXx4akEo1WOoAny0ZgX2pQDjmI8Tv_M_5cibdIM6tz-TdCpVel9VSiQ"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6ImQ1ODgwMzIzLTYzOGQtMTFlOS1iODBkLTM1ZWE3YTNjMWY5MiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3Nzk2NDMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTc4MzI0MywiaWF0IjoxNTU1Nzc5NjQzLCJqdGkiOiJhMTJhY2FlZS0xNzZlLTRjZDItYTZjMS0xYmUyZWM0NjRjZDgiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.Yy6FP7jGhcfkYNxlF31TQCVEW5NOH2plJcGCilasezHp3UTJRkaMVwmTBVaPqS_BjRxbrxz5FzoXxichXliw68PLJyYHtUIoN7kZfVRi1w6K1KhiEal7MSmrZa0p055APDw3bpA1_H5Ym5lkGRj_Ax92maNM9Mft8T3skpkxSEL327GBOwc0YBqTCHsIf-IO6TLauN2MckQA3mngfk7H_w2UEdiZpm5i8oz-L69PRey5KvmIQ_5GpIjfRWtJZEiUsKqDmwFLRZRgAaY2H2OLHLI2RUq7087EXx4akEo1WOoAny0ZgX2pQDjmI8Tv_M_5cibdIM6tz-TdCpVel9VSiQ"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6ImQ1ODgwMzIzLTYzOGQtMTFlOS1iODBkLTM1ZWE3YTNjMWY5MiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3Nzk2NDMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTc4MzI0MywiaWF0IjoxNTU1Nzc5NjQzLCJqdGkiOiJhMTJhY2FlZS0xNzZlLTRjZDItYTZjMS0xYmUyZWM0NjRjZDgiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.Yy6FP7jGhcfkYNxlF31TQCVEW5NOH2plJcGCilasezHp3UTJRkaMVwmTBVaPqS_BjRxbrxz5FzoXxichXliw68PLJyYHtUIoN7kZfVRi1w6K1KhiEal7MSmrZa0p055APDw3bpA1_H5Ym5lkGRj_Ax92maNM9Mft8T3skpkxSEL327GBOwc0YBqTCHsIf-IO6TLauN2MckQA3mngfk7H_w2UEdiZpm5i8oz-L69PRey5KvmIQ_5GpIjfRWtJZEiUsKqDmwFLRZRgAaY2H2OLHLI2RUq7087EXx4akEo1WOoAny0ZgX2pQDjmI8Tv_M_5cibdIM6tz-TdCpVel9VSiQ"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjVlN2Q0MDFlLTYzNzktMTFlOS1hOGZlLThmMWYyZDA2NjAxZiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3NzA4NTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTc3NDQ1MywiaWF0IjoxNTU1NzcwODU0LCJqdGkiOiJhYTA0ZjVhMy05OGQwLTQzNGEtODk0ZC03NzZkNzkxYmJhNDYiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.HzZGDFWMK019tyHPfeecdb3HblEywbDin0rS-m58snDR4Depinoj05jROMOI-ljYPb8Lsug4k4ap_KmzqphZCoF6cEVHepRN6_1eEy8HgQq_jBlc0KGITh2nNfGqcT59owzX__lakksLIrtUCO9G92JWdKm3n2uIuSRNyRtHm9e324L9RV5iQT2SwR4GzHAMmX0LzR1zjaE6_xHNavLHgX_TGFNQKjGupT9lhcJeqIpZ2EjBWXIKxpbZJ2X9Zzfn7H6O9puDdhyzFPhm7z_FD6Syuo0_5UoaXrMb6IqbPXZceHpO1hhipazRxZzuwd7JMfGM9ldhvn4bMtoZrJ-iRA"
            },
            method: 'get'
        });
    }
};