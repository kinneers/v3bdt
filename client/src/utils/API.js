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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjRhOGRkMzExLTY0YTktMTFlOS1hYWQ2LTQ1YWM1NDc5NzVjOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU5MDEzODcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTkwNDk4NywiaWF0IjoxNTU1OTAxMzg3LCJqdGkiOiIyZTJkNTNmMS1iODEwLTQ2ODAtOGM3NS01N2NiMjgzMDE0YWYiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.NLt_igrv-G5k4n2Cd1HLg3RiZHqPrsz0iKKkC6hA8y2zvHlS1i8xki8YCUkTyiSreXEjoZ3SkptoNjKvZd2MlcSHb6CzsqqmmUSqg4skNntdVgjK618rnnzh30P4fDlvHBuCrkufkJDG-I1KmwMd71l4yznt5Ao16db7rxmZEEKGZwfjRcKhJwUamjPTMy6w8rPyuNdnwbzqIBHMO7-jMUuU8G96sPMU2zDvyiDEZBg9HWe0TPWsVIs8lZ8LhjELy6ByAjocBV5DLso4_Qz9pd-9uHriYO7owsYkSVBQ6QH644RdOQOpvxNLSZZXz2kvQvZQTthN4_p99qBOBWcgMg"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjRhOGRkMzExLTY0YTktMTFlOS1hYWQ2LTQ1YWM1NDc5NzVjOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU5MDEzODcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTkwNDk4NywiaWF0IjoxNTU1OTAxMzg3LCJqdGkiOiIyZTJkNTNmMS1iODEwLTQ2ODAtOGM3NS01N2NiMjgzMDE0YWYiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.NLt_igrv-G5k4n2Cd1HLg3RiZHqPrsz0iKKkC6hA8y2zvHlS1i8xki8YCUkTyiSreXEjoZ3SkptoNjKvZd2MlcSHb6CzsqqmmUSqg4skNntdVgjK618rnnzh30P4fDlvHBuCrkufkJDG-I1KmwMd71l4yznt5Ao16db7rxmZEEKGZwfjRcKhJwUamjPTMy6w8rPyuNdnwbzqIBHMO7-jMUuU8G96sPMU2zDvyiDEZBg9HWe0TPWsVIs8lZ8LhjELy6ByAjocBV5DLso4_Qz9pd-9uHriYO7owsYkSVBQ6QH644RdOQOpvxNLSZZXz2kvQvZQTthN4_p99qBOBWcgMg"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjRhOGRkMzExLTY0YTktMTFlOS1hYWQ2LTQ1YWM1NDc5NzVjOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU5MDEzODcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTkwNDk4NywiaWF0IjoxNTU1OTAxMzg3LCJqdGkiOiIyZTJkNTNmMS1iODEwLTQ2ODAtOGM3NS01N2NiMjgzMDE0YWYiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.NLt_igrv-G5k4n2Cd1HLg3RiZHqPrsz0iKKkC6hA8y2zvHlS1i8xki8YCUkTyiSreXEjoZ3SkptoNjKvZd2MlcSHb6CzsqqmmUSqg4skNntdVgjK618rnnzh30P4fDlvHBuCrkufkJDG-I1KmwMd71l4yznt5Ao16db7rxmZEEKGZwfjRcKhJwUamjPTMy6w8rPyuNdnwbzqIBHMO7-jMUuU8G96sPMU2zDvyiDEZBg9HWe0TPWsVIs8lZ8LhjELy6ByAjocBV5DLso4_Qz9pd-9uHriYO7owsYkSVBQ6QH644RdOQOpvxNLSZZXz2kvQvZQTthN4_p99qBOBWcgMg"
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
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjRhOGRkMzExLTY0YTktMTFlOS1hYWQ2LTQ1YWM1NDc5NzVjOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU5MDEzODcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTkwNDk4NywiaWF0IjoxNTU1OTAxMzg3LCJqdGkiOiIyZTJkNTNmMS1iODEwLTQ2ODAtOGM3NS01N2NiMjgzMDE0YWYiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.NLt_igrv-G5k4n2Cd1HLg3RiZHqPrsz0iKKkC6hA8y2zvHlS1i8xki8YCUkTyiSreXEjoZ3SkptoNjKvZd2MlcSHb6CzsqqmmUSqg4skNntdVgjK618rnnzh30P4fDlvHBuCrkufkJDG-I1KmwMd71l4yznt5Ao16db7rxmZEEKGZwfjRcKhJwUamjPTMy6w8rPyuNdnwbzqIBHMO7-jMUuU8G96sPMU2zDvyiDEZBg9HWe0TPWsVIs8lZ8LhjELy6ByAjocBV5DLso4_Qz9pd-9uHriYO7owsYkSVBQ6QH644RdOQOpvxNLSZZXz2kvQvZQTthN4_p99qBOBWcgMg"
            },
            method: 'get'
        });
    },

    //Saves the rating data associated with a given behaviorID
    saveData: function(id) {
        return axios({
            url: "/api/teacher/ratingform/" + id,
            headers: {
                'Content-Type': 'application/json',
                accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6IjRhOGRkMzExLTY0YTktMTFlOS1hYWQ2LTQ1YWM1NDc5NzVjOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU5MDEzODcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTkwNDk4NywiaWF0IjoxNTU1OTAxMzg3LCJqdGkiOiIyZTJkNTNmMS1iODEwLTQ2ODAtOGM3NS01N2NiMjgzMDE0YWYiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.NLt_igrv-G5k4n2Cd1HLg3RiZHqPrsz0iKKkC6hA8y2zvHlS1i8xki8YCUkTyiSreXEjoZ3SkptoNjKvZd2MlcSHb6CzsqqmmUSqg4skNntdVgjK618rnnzh30P4fDlvHBuCrkufkJDG-I1KmwMd71l4yznt5Ao16db7rxmZEEKGZwfjRcKhJwUamjPTMy6w8rPyuNdnwbzqIBHMO7-jMUuU8G96sPMU2zDvyiDEZBg9HWe0TPWsVIs8lZ8LhjELy6ByAjocBV5DLso4_Qz9pd-9uHriYO7owsYkSVBQ6QH644RdOQOpvxNLSZZXz2kvQvZQTthN4_p99qBOBWcgMg"
            },
            method: 'post'
        });
    }
    
};