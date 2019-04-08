const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  userName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  authLevel: { type: Number, enum: [1, 2, 3, 4, 5], required: true },
  classes: [{ type: String, required: false}],
  students: [{ type: Schema.Types.ObjectId, ref: "Student", required: false}]
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
