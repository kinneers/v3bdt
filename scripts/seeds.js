const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the pirates below

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/behavior_db";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, function (err) {
    if (err)
        console.log(err);
});

const teacherSeed = [
    {
        userName: "misstanner@gmail.com",
        firstName: "Becky",
        lastName: "Tanner",
        authLevel: 3,
        classes: ["Math", "Reading", "History"]
    }
]

db.Teacher
    .deleteMany({})
    .then(() => db.Teacher.insertMany(teacherSeed))
    .then(data => {
        console.log(data);
        process.exit(0);
        //start this process over for student. Remove process.exit above once we uncomment.
        /* db.Student
            .deleteMany({})
            .then(() => db.Student.insertMany(studentSeed))
            .then(data => {
                console.log(data);
                process.exit(0);*/
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });