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
                accesstoken
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjIxMDc0MmNiLTY1NGEtMTFlOS04ODg2LWY1NmNlMzZmNmU5MSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU5NzA0NjYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTk3NDA2NiwiaWF0IjoxNTU1OTcwNDY2LCJqdGkiOiIzZGRmYzgwZS1iMzAxLTRmM2QtYTAzNC1jZmMzOTYzODliNjUiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.dsFOU_58mzO2A3F_brLDqKJ3OGzsgACF8p0vlws6dOBjhOibm-sR4l1IZLT9d15cbE9QehusICBBvoGoBb4vYW1jceLsXCgvYVMnLNQjcVczTpB51t06KHe9II5m23wol0VDOP0UjjVtFX8_C0_3svqfXZakNM1wfotly_p11gpdGdC4QZQaCqiqAP4EDScyAL1QjJ1mKr-MxMrG8hgRhy2BiDCH-UfU_shT3dGY6G7ww7kGpuFizqu3rLnQiz6CQEfHHHzCh8uMDeV7HTFtZ8S3LjNLYTP0a8nbIbrR8Q7AIGyNqd_VYCDASkxej6H-jOTvZZtoIMK2OXt35fVRfg"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjIxMDc0MmNiLTY1NGEtMTFlOS04ODg2LWY1NmNlMzZmNmU5MSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU5NzA0NjYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTk3NDA2NiwiaWF0IjoxNTU1OTcwNDY2LCJqdGkiOiIzZGRmYzgwZS1iMzAxLTRmM2QtYTAzNC1jZmMzOTYzODliNjUiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.dsFOU_58mzO2A3F_brLDqKJ3OGzsgACF8p0vlws6dOBjhOibm-sR4l1IZLT9d15cbE9QehusICBBvoGoBb4vYW1jceLsXCgvYVMnLNQjcVczTpB51t06KHe9II5m23wol0VDOP0UjjVtFX8_C0_3svqfXZakNM1wfotly_p11gpdGdC4QZQaCqiqAP4EDScyAL1QjJ1mKr-MxMrG8hgRhy2BiDCH-UfU_shT3dGY6G7ww7kGpuFizqu3rLnQiz6CQEfHHHzCh8uMDeV7HTFtZ8S3LjNLYTP0a8nbIbrR8Q7AIGyNqd_VYCDASkxej6H-jOTvZZtoIMK2OXt35fVRfg"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjIxMDc0MmNiLTY1NGEtMTFlOS04ODg2LWY1NmNlMzZmNmU5MSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU5NzA0NjYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTk3NDA2NiwiaWF0IjoxNTU1OTcwNDY2LCJqdGkiOiIzZGRmYzgwZS1iMzAxLTRmM2QtYTAzNC1jZmMzOTYzODliNjUiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.dsFOU_58mzO2A3F_brLDqKJ3OGzsgACF8p0vlws6dOBjhOibm-sR4l1IZLT9d15cbE9QehusICBBvoGoBb4vYW1jceLsXCgvYVMnLNQjcVczTpB51t06KHe9II5m23wol0VDOP0UjjVtFX8_C0_3svqfXZakNM1wfotly_p11gpdGdC4QZQaCqiqAP4EDScyAL1QjJ1mKr-MxMrG8hgRhy2BiDCH-UfU_shT3dGY6G7ww7kGpuFizqu3rLnQiz6CQEfHHHzCh8uMDeV7HTFtZ8S3LjNLYTP0a8nbIbrR8Q7AIGyNqd_VYCDASkxej6H-jOTvZZtoIMK2OXt35fVRfg"
            },
            method: 'get'
        });
    },

    //Saves the rating data associated with a given behaviorID
    saveData: function(id) {
        return axios({
            url: "/api/teacher/ratingform",
            headers: {
                'Content-Type': 'application/json',
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjIxMDc0MmNiLTY1NGEtMTFlOS04ODg2LWY1NmNlMzZmNmU5MSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU5NzA0NjYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTk3NDA2NiwiaWF0IjoxNTU1OTcwNDY2LCJqdGkiOiIzZGRmYzgwZS1iMzAxLTRmM2QtYTAzNC1jZmMzOTYzODliNjUiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.dsFOU_58mzO2A3F_brLDqKJ3OGzsgACF8p0vlws6dOBjhOibm-sR4l1IZLT9d15cbE9QehusICBBvoGoBb4vYW1jceLsXCgvYVMnLNQjcVczTpB51t06KHe9II5m23wol0VDOP0UjjVtFX8_C0_3svqfXZakNM1wfotly_p11gpdGdC4QZQaCqiqAP4EDScyAL1QjJ1mKr-MxMrG8hgRhy2BiDCH-UfU_shT3dGY6G7ww7kGpuFizqu3rLnQiz6CQEfHHHzCh8uMDeV7HTFtZ8S3LjNLYTP0a8nbIbrR8Q7AIGyNqd_VYCDASkxej6H-jOTvZZtoIMK2OXt35fVRfg"
            },
            method: 'post'
        });
    }
    
};