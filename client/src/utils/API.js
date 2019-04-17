import axios from "axios";

export default {

  // Gets all behaviors' basic info (behaviorID, behavior, studentID, name) ref'd to a teacher
  getBehaviors: function() {
    return axios.get("/api/teacher/behaviors/:id");
  }
  
};
