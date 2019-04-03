const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  userName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  authLevel: { type: Number, enum: [1, 2, 3, 4, 5], required: true },
  classes: [{ type: String, required: false}],
  teachers: [{ type: Schema.Types.ObjectId, ref: "Teacher", required: false}],
  behaviors: [{ type: Schema.Types.ObjectId, ref: "Behavior", required: true}],
  status: {type: Boolean, required: true, default: true},
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() }
});

const student = mongoose.model("Student", studentSchema);

module.exports = student;
