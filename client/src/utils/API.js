import axios from "axios";

export default {

  // Gets all behaviors' basic info (behaviorID, behavior, studentID, name) ref'd to a teacher
  getBehaviors: function(id) {
    return axios({
        url: "/api/teacher/behaviors/" + id, 
        headers: {'Content-Type': 'application/json',
                    accesstoken: "eyJraWQiOiJBNUFGK2RvRWgyd2E3SHllZ3doSzBvaTBqQXFJNnk5Qk4rR1VHRjZLNHhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YiLCJldmVudF9pZCI6ImJmZWZlMjg3LTYyMjItMTFlOS04NWI2LTc3MDQyNGYzMmEzMSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NTU2MjM3MDAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX1JYM0w1Q3kzNSIsImV4cCI6MTU1NTYyNzMwMCwiaWF0IjoxNTU1NjIzNzAwLCJqdGkiOiI0NDRiZDU0Mi04ZmQwLTQ3ZDItYjhlNS1kMDliMTRkZGRkODMiLCJjbGllbnRfaWQiOiJ2MTNmMjNscGp2NTE0M2tvMXJjb2lmajU3IiwidXNlcm5hbWUiOiIxY2RjYThiNy1kMjlkLTQ0MWMtYWU5My1hYjA2NDM5YjU4M2YifQ.K1E9dPk76J0pO5BBmqmenker0QNmICn-XO_8KD3ctjMcfjAdCl4TEqU3Ez6sZHYGF0HAjJfDovhp65MFOHLMGW9Aop4O058E1aGCLD5MfrRIKDVBHxESQg3t_hTtvKvnsoTghnrhF66aO1NbEhP_j1EJWugT1jRx7lw9n0qD-7bxwL9_ehRddLPl5N_sSpErVgQ0FB9dUBO0yRW8ql5Xs08t2cOaJMoqAPKXChN4fzaEGkx9oFSODz-SX6eejuSiUKR8V3occugQA-6feYtRXrqYlZIHOJzOVKx8Blgq5WyK8FiU_c5v3i3fNdlWow-KxtjfiYVTXaPpWAO_4uZOFw"
                            },
                    method: 'get'
                        })
                }};