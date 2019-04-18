const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BehaviorSchema = new Schema({
  behaviorName: { type: String, required: true, },
  behaviorTracked: [{
    behaviorValue: { type: Number, enum: [0, 1], allowNull: true, required: false },
    behaviorDate: { type: Date, default: Date.now(), required: true }
  }],
  status: {type: Boolean, required: true, default: true},
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
  studentName: { type: String, required: false, },
  student: { type: Schema.Types.ObjectId, ref: "Student", required: false},
  teachers: [{ type: Schema.Types.ObjectId, ref: "Teacher", required: true}]
});

const Behavior = mongoose.model("Behavior", BehaviorSchema);

module.exports = Behavior;