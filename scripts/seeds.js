const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the pirates below

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/behavior_db";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, function (err) {
    if (err)
        console.log(err);
});

const teacherArray = [];

const teacherSeed = [
    {
        userName: "misstanner@gmail.com",
        firstName: "Becky",
        lastName: "Tanner",
        authLevel: 3,
        classes: ["Math", "Reading", "History"]
    }
]

const studentSeed = [
    {
        userName: "timmyt@gmail.com",
        firstName: "Timmy",
        lastName: "Thomas",
        authLevel: 1,
    }
]

const behaviorSeeds = [
    {
        behaviorName: "sit still in class",
        behaviorTracked: [
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T12:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T12:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T12:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T12:45:00Z"
            }
        ]
    }
]

db.Teacher
    .deleteMany({})
    .then(() => db.Teacher.insertMany(teacherSeed))
    .then(teacherData => {
        // console.log(teacherData);
        teacherArray.push(...teacherData);
        // console.log(teacherArray);
        //start this process over for student. Remove process.exit above once we uncomment.
        db.Student
            .deleteMany({})
            .then(() => db.Student.insertMany(studentSeed))
            .then(studentData => {
                const teacher = teacherArray.filter(object => {
                    return object.userName === "misstanner@gmail.com"
                });
                db.Teacher.findOneAndUpdate({ _id: teacher[0]._id }, { $push: { students: studentData[0]._id } }, { new: true }).then(updatedTeacher => {
                    console.log(updatedTeacher);
                    db.Student.findOneAndUpdate({ _id: studentData[0]._id }, { $push: { teachers: updatedTeacher._id } }/* , { new: true } */).then(updatedStudent => {
                        db.Behavior.deleteMany({})
                        .then(() => {
                            db.Behavior.insertMany(behaviorSeeds).then(behaviorData => {
                                db.Student.findOneAndUpdate({ _id: updatedStudent._id }, { $push: { behaviors: behaviorData[0]._id } }, { new: true })
                                    .then(studentWithBehavior => {
                                        db.Behavior.findOneAndUpdate({ _id: behaviorData[0]._id }, {
                                            $push: { teachers: updatedTeacher._id }, student: studentWithBehavior._id
                                        }/* , { new: true } */).then(completeBehavior => {
                                            db.Teacher.findOneAndUpdate({ _id: updatedTeacher._id }, { $push: { behaviors: completeBehavior._id } }, { new: true }).then(completeTeacher => {
                                                console.log("studentWithBehavior", studentWithBehavior);
                                                console.log("complete teacher", completeTeacher);
                                                console.log("complete behavior", completeBehavior);
                                                process.exit(0);
                                            })
                                        })
                                    })
    
                            })    
                        })


                    })
                })

            })
            .catch(err => {
                console.error(err);
                process.exit(1);
            })
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })