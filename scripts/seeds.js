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
        // classes: ["Math", "Reading", "History"]
        classes: []
    }
]

const studentSeed = [
    {
        userName: "timmyt@gmail.com",
        firstName: "Timmy",
        lastName: "Thomas",
        authLevel: 1,
    },
    {
        userName: "marym@gmail.com",
        firstName: "Mary",
        lastName: "Martin",
        authLevel: 1,
    },
    {
        userName: "suzys@gmail.com",
        firstName: "Suzy",
        lastName: "Smith",
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
    },
    {
        behaviorName: "raise hand befire speaking",
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
    },
    {
        behaviorName: "use your inside voice",
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
                // db.Teacher.findOneAndUpdate({ _id: teacher[0]._id }, { $push: { students: studentData[0]._id } }, { new: true }).then(updatedTeacher => {
                db.Teacher.findOneAndUpdate({ _id: teacher[0]._id }, { $push: { students: [studentData[0]._id, studentData[1]._id, studentData[2]._id] } }, { new: true }).then(updatedTeacher => {
                        console.log(updatedTeacher);
                    db.Student.findOneAndUpdate({ _id: studentData[0]._id }, { $push: { teachers: updatedTeacher._id } }/* , { new: true } */).then(updatedStudent1 => {
                        db.Student.findOneAndUpdate({ _id: studentData[1]._id }, { $push: { teachers: updatedTeacher._id } }/* , { new: true } */).then(updatedStudent2 => {
                            db.Student.findOneAndUpdate({ _id: studentData[2]._id }, { $push: { teachers: updatedTeacher._id } }/* , { new: true } */).then(updatedStudent3 => {

                        db.Behavior.deleteMany({})
                        .then(() => {
                            db.Behavior.insertMany(behaviorSeeds).then(behaviorData => {
                                db.Student.findOneAndUpdate({ _id: updatedStudent1._id }, { $push: { behaviors: behaviorData[0]._id } }, { new: true })
                                    .then(studentWithBehavior1 => {
                                        db.Behavior.findOneAndUpdate({ _id: behaviorData[0]._id }, {
                                            $push: { teachers: updatedTeacher._id }, student: studentWithBehavior1._id
                                        }/* , { new: true } */).then(completeBehavior1 => {
                                            db.Teacher.findOneAndUpdate({ _id: updatedTeacher._id }, { $push: { behaviors: completeBehavior1._id } }, { new: true }).then(completeTeacher => {
                                                console.log("#1 complete teacher", completeTeacher);
                                                console.log("#1 studentWithBehavior", studentWithBehavior1);
                                                console.log("#1 complete behavior", completeBehavior1);
                                                // process.exit(0);
                                            })
                                        })
                                    })

                                db.Student.findOneAndUpdate({ _id: updatedStudent2._id }, { $push: { behaviors: behaviorData[1]._id } }/*, { new: true }*/)
                                .then(studentWithBehavior2 => {
                                    db.Behavior.findOneAndUpdate({ _id: behaviorData[1]._id }, {
                                        $push: { teachers: updatedTeacher._id }, student: studentWithBehavior2._id
                                    }/* , { new: true } */).then(completeBehavior2 => {
                                        db.Teacher.findOneAndUpdate({ _id: updatedTeacher._id }, { $push: { behaviors: completeBehavior2._id } }/*, { new: true }*/).then(completeTeacher => {
                                            console.log("#2 complete teacher", completeTeacher);
                                            console.log("#2 studentWithBehavior", studentWithBehavior2);
                                            console.log("#2 complete behavior", completeBehavior2);
                                            // process.exit(0);
                                        })
                                    })
                                })

                                db.Student.findOneAndUpdate({ _id: updatedStudent3._id }, { $push: { behaviors: behaviorData[2]._id } }/*, { new: true }*/)
                                .then(studentWithBehavior3 => {
                                    db.Behavior.findOneAndUpdate({ _id: behaviorData[2]._id }, {
                                        $push: { teachers: updatedTeacher._id }, student: studentWithBehavior3._id
                                    }/* , { new: true } */).then(completeBehavior3 => {
                                        db.Teacher.findOneAndUpdate({ _id: updatedTeacher._id }, { $push: { behaviors: completeBehavior3._id } }/*, { new: true }*/).then(completeTeacher => {
                                            console.log("#3 complete teacher", completeTeacher);
                                            console.log("#3 studentWithBehavior", studentWithBehavior3);
                                            console.log("#3 complete behavior", completeBehavior3);
                                            process.exit(0);
                                        })
                                    })
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