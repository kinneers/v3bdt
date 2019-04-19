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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6ImI3MmRjYjdiLTYyZjItMTFlOS1hYjliLWE5ZjlmNjAzMjE1YSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3MTMwMjAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTcxNjYyMCwiaWF0IjoxNTU1NzEzMDIwLCJqdGkiOiIwYjUyZDdmNy01ZjAyLTRjN2EtODFjNC1jZGI2ZDQyZDM4OTgiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.CpMBcoCwWB2j5gNh2yuQwk3RXMKdIa9Ln_s9iWbaNB_S00zesFlf-rttGApch2fZaLEGEnsjWAerc9eVglqsGPO9AJB1Tuo0VCS4urLknn1MlnkNzXRSJ_SDCD1s8FeI7r8ugZNoRKUe0r_xooYq2BjPbH229tcQw-eVR6vpz1Ec16KjOESKfwWn5SfEkx4QH0RbbHROcltGZx87YyY0a3hGS0-dlxRjAMqNxAazPEUk_m5Cqab6ien4b86gBqUrF3ty34DtdN7zpBVQRVyanUQFAUrmYiAVYSXXJjHZ3kFwGft8Rcpje1MAuLbBEFlLRcseBXb5zpu1AY55v7BJGQ"
            },
            method: 'get'
        });
    },

    // Gets all behaviors
    getAllBehaviors: function(id) {
        return axios({
            url: "/api/teacher/behaviors/",
            headers: {
                'Content-Type': 'application/json',
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6ImI3MmRjYjdiLTYyZjItMTFlOS1hYjliLWE5ZjlmNjAzMjE1YSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3MTMwMjAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTcxNjYyMCwiaWF0IjoxNTU1NzEzMDIwLCJqdGkiOiIwYjUyZDdmNy01ZjAyLTRjN2EtODFjNC1jZGI2ZDQyZDM4OTgiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.CpMBcoCwWB2j5gNh2yuQwk3RXMKdIa9Ln_s9iWbaNB_S00zesFlf-rttGApch2fZaLEGEnsjWAerc9eVglqsGPO9AJB1Tuo0VCS4urLknn1MlnkNzXRSJ_SDCD1s8FeI7r8ugZNoRKUe0r_xooYq2BjPbH229tcQw-eVR6vpz1Ec16KjOESKfwWn5SfEkx4QH0RbbHROcltGZx87YyY0a3hGS0-dlxRjAMqNxAazPEUk_m5Cqab6ien4b86gBqUrF3ty34DtdN7zpBVQRVyanUQFAUrmYiAVYSXXJjHZ3kFwGft8Rcpje1MAuLbBEFlLRcseBXb5zpu1AY55v7BJGQ"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6ImI3MmRjYjdiLTYyZjItMTFlOS1hYjliLWE5ZjlmNjAzMjE1YSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3MTMwMjAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTcxNjYyMCwiaWF0IjoxNTU1NzEzMDIwLCJqdGkiOiIwYjUyZDdmNy01ZjAyLTRjN2EtODFjNC1jZGI2ZDQyZDM4OTgiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.CpMBcoCwWB2j5gNh2yuQwk3RXMKdIa9Ln_s9iWbaNB_S00zesFlf-rttGApch2fZaLEGEnsjWAerc9eVglqsGPO9AJB1Tuo0VCS4urLknn1MlnkNzXRSJ_SDCD1s8FeI7r8ugZNoRKUe0r_xooYq2BjPbH229tcQw-eVR6vpz1Ec16KjOESKfwWn5SfEkx4QH0RbbHROcltGZx87YyY0a3hGS0-dlxRjAMqNxAazPEUk_m5Cqab6ien4b86gBqUrF3ty34DtdN7zpBVQRVyanUQFAUrmYiAVYSXXJjHZ3kFwGft8Rcpje1MAuLbBEFlLRcseBXb5zpu1AY55v7BJGQ"
            },
            method: 'get'
        });
    }
};