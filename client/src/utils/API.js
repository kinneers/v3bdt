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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjhmODU5OGYyLTY0OTYtMTFlOS1hYjliLWE5ZjlmNjAzMjE1YSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU4OTMzNDIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTg5Njk0MiwiaWF0IjoxNTU1ODkzMzQyLCJqdGkiOiJlNmQxNWIzMC0zYTI5LTQ4MTgtODAyOC0xNmE3Zjc3MjZlZGYiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.ifqrikEK_VBPicGUrqbT4dzKnZxouqAwGVmFJtyoxWADckBpgvunM1UQ-6FCG1C0i2WUHH973EKxl7N1t6YzoCm_a80ZiW_Q24nGM2gevTQnE5P4ikTq9dLQR7vH3yRT-T5vHc8Tg6k2TIePRXBpPwp3tnXX-iUMCT8sQYtUTYxtvXEhmNfuTE87pvC8BHzBlFNFi3uL0VKupEKynS3z_AVz85f0N_9js8RXWOlz3p3G2PDKfwGioB2LIJtDQdfIQ6Qj0vYhZw3z7qJbvbVM52C7s5BoaBhxeUWyUx635szfih9ZoY4R0n4a8u4wU7uAdxYIEOtir3TG46llpQ0plw"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjhmODU5OGYyLTY0OTYtMTFlOS1hYjliLWE5ZjlmNjAzMjE1YSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU4OTMzNDIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTg5Njk0MiwiaWF0IjoxNTU1ODkzMzQyLCJqdGkiOiJlNmQxNWIzMC0zYTI5LTQ4MTgtODAyOC0xNmE3Zjc3MjZlZGYiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.ifqrikEK_VBPicGUrqbT4dzKnZxouqAwGVmFJtyoxWADckBpgvunM1UQ-6FCG1C0i2WUHH973EKxl7N1t6YzoCm_a80ZiW_Q24nGM2gevTQnE5P4ikTq9dLQR7vH3yRT-T5vHc8Tg6k2TIePRXBpPwp3tnXX-iUMCT8sQYtUTYxtvXEhmNfuTE87pvC8BHzBlFNFi3uL0VKupEKynS3z_AVz85f0N_9js8RXWOlz3p3G2PDKfwGioB2LIJtDQdfIQ6Qj0vYhZw3z7qJbvbVM52C7s5BoaBhxeUWyUx635szfih9ZoY4R0n4a8u4wU7uAdxYIEOtir3TG46llpQ0plw"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjhmODU5OGYyLTY0OTYtMTFlOS1hYjliLWE5ZjlmNjAzMjE1YSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU4OTMzNDIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTg5Njk0MiwiaWF0IjoxNTU1ODkzMzQyLCJqdGkiOiJlNmQxNWIzMC0zYTI5LTQ4MTgtODAyOC0xNmE3Zjc3MjZlZGYiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.ifqrikEK_VBPicGUrqbT4dzKnZxouqAwGVmFJtyoxWADckBpgvunM1UQ-6FCG1C0i2WUHH973EKxl7N1t6YzoCm_a80ZiW_Q24nGM2gevTQnE5P4ikTq9dLQR7vH3yRT-T5vHc8Tg6k2TIePRXBpPwp3tnXX-iUMCT8sQYtUTYxtvXEhmNfuTE87pvC8BHzBlFNFi3uL0VKupEKynS3z_AVz85f0N_9js8RXWOlz3p3G2PDKfwGioB2LIJtDQdfIQ6Qj0vYhZw3z7qJbvbVM52C7s5BoaBhxeUWyUx635szfih9ZoY4R0n4a8u4wU7uAdxYIEOtir3TG46llpQ0plw"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjhmODU5OGYyLTY0OTYtMTFlOS1hYjliLWE5ZjlmNjAzMjE1YSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU4OTMzNDIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTg5Njk0MiwiaWF0IjoxNTU1ODkzMzQyLCJqdGkiOiJlNmQxNWIzMC0zYTI5LTQ4MTgtODAyOC0xNmE3Zjc3MjZlZGYiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.ifqrikEK_VBPicGUrqbT4dzKnZxouqAwGVmFJtyoxWADckBpgvunM1UQ-6FCG1C0i2WUHH973EKxl7N1t6YzoCm_a80ZiW_Q24nGM2gevTQnE5P4ikTq9dLQR7vH3yRT-T5vHc8Tg6k2TIePRXBpPwp3tnXX-iUMCT8sQYtUTYxtvXEhmNfuTE87pvC8BHzBlFNFi3uL0VKupEKynS3z_AVz85f0N_9js8RXWOlz3p3G2PDKfwGioB2LIJtDQdfIQ6Qj0vYhZw3z7qJbvbVM52C7s5BoaBhxeUWyUx635szfih9ZoY4R0n4a8u4wU7uAdxYIEOtir3TG46llpQ0plw"
            },
            method: 'get'
        });
    }
};