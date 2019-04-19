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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6ImY0YzhjMWE2LTYyNGEtMTFlOS04ODg2LWY1NmNlMzZmNmU5MSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU2NDA5NjgsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTY0NDU2OCwiaWF0IjoxNTU1NjQwOTY4LCJqdGkiOiI3OTkwN2EzZC04Y2YwLTQwYTUtYmRiOS04ZmIzY2NhNmJkYWUiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.A6RgnG3z9QiPuuyuaciX7-mSfI-fk5VYCFvqietmsa6r9F9tklyWViYjjrY0q8fnfLoam6dlU1LpwH4hvL3URT7I4gpBOBe6Kaj-lHv4IInSAoeyMCCchblf-grYul_Oe6RbMLwyatVu1rMWNYS2B6ZPR2qs6_ozSM7QGijRiQRvc1Yu1ZRMThtMOL684H0nYqpnH7ElYXHPovstnzfvsOfuP855oF-IQNKQFKP425oS0p21rQwJubryrmGbsd18pSG3TUjwbu-rHIoorKwFO0m7TzY6TeozYiQXZPiYZbc_vm3LudFKE11Eqc5s6EnkOi3o6wjRTEotY5KkdR8qZA"
            },
            method: 'get'
        });
    }
};