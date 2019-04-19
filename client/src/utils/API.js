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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6ImIyYThjMDNiLTYyZTQtMTFlOS1hYWQ2LTQ1YWM1NDc5NzVjOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3MDcwMDAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTcxMDYwMCwiaWF0IjoxNTU1NzA3MDAwLCJqdGkiOiJiZmQzYzJiYS0wMWUwLTQ1NDMtYjQ3ZC03MjAyZTg3YmU1N2EiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.5JmCfH8wpEja9nrULQAEcIAcLKZzmJOujplQKaywyD6dKCywXJJ00azIFGuYnUcsG9encemefPMB2F32jgZdCDuzpa7xhpSEzk8t_GQiLUyysgwWMmSqRyX-zEp5d6_mv8v0ggVr7lIFSot75NP1a2X09fwp_rm3Fass4mmlz7Z_82FAcfYH4zK35Br15qA7oUYcNA6OdhTqLC14I18VogECa6iBTdtI2ubxx8H6k16_-1uHltndTtk0N9eJozDN3XKGcvt1FtXJtuUU5d1jFGjleuLdYDk7FXTbAoZ7yaM_YvheooIkGClCrjoaNYHtRB9TBSXkGI-Mmx_wvp6Jfg"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6ImIyYThjMDNiLTYyZTQtMTFlOS1hYWQ2LTQ1YWM1NDc5NzVjOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3MDcwMDAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTcxMDYwMCwiaWF0IjoxNTU1NzA3MDAwLCJqdGkiOiJiZmQzYzJiYS0wMWUwLTQ1NDMtYjQ3ZC03MjAyZTg3YmU1N2EiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.5JmCfH8wpEja9nrULQAEcIAcLKZzmJOujplQKaywyD6dKCywXJJ00azIFGuYnUcsG9encemefPMB2F32jgZdCDuzpa7xhpSEzk8t_GQiLUyysgwWMmSqRyX-zEp5d6_mv8v0ggVr7lIFSot75NP1a2X09fwp_rm3Fass4mmlz7Z_82FAcfYH4zK35Br15qA7oUYcNA6OdhTqLC14I18VogECa6iBTdtI2ubxx8H6k16_-1uHltndTtk0N9eJozDN3XKGcvt1FtXJtuUU5d1jFGjleuLdYDk7FXTbAoZ7yaM_YvheooIkGClCrjoaNYHtRB9TBSXkGI-Mmx_wvp6Jfg"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6ImIyYThjMDNiLTYyZTQtMTFlOS1hYWQ2LTQ1YWM1NDc5NzVjOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU3MDcwMDAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTcxMDYwMCwiaWF0IjoxNTU1NzA3MDAwLCJqdGkiOiJiZmQzYzJiYS0wMWUwLTQ1NDMtYjQ3ZC03MjAyZTg3YmU1N2EiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.5JmCfH8wpEja9nrULQAEcIAcLKZzmJOujplQKaywyD6dKCywXJJ00azIFGuYnUcsG9encemefPMB2F32jgZdCDuzpa7xhpSEzk8t_GQiLUyysgwWMmSqRyX-zEp5d6_mv8v0ggVr7lIFSot75NP1a2X09fwp_rm3Fass4mmlz7Z_82FAcfYH4zK35Br15qA7oUYcNA6OdhTqLC14I18VogECa6iBTdtI2ubxx8H6k16_-1uHltndTtk0N9eJozDN3XKGcvt1FtXJtuUU5d1jFGjleuLdYDk7FXTbAoZ7yaM_YvheooIkGClCrjoaNYHtRB9TBSXkGI-Mmx_wvp6Jfg"
            },
            method: 'get'
        });
    }
};