import axios from "axios";

export default {

  // Gets all behaviors' basic info (behaviorID, behavior, studentID, name) ref'd to a teacher
  getBehaviors: function(id) {
      console.log('The API file got run');
    return axios.get("/api/teacher/behaviors/" + id);
  }
  
};
