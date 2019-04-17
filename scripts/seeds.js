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
                behaviorDate: "2019-04-08T12:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T12:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T12:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T12:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T13:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T13:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T13:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T13:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T14:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T14:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-08T14:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T14:45:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-08T15:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T15:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T15:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T15:45:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-08T16:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T16:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T16:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T16:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T17:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T17:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T17:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T17:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T18:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T18:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-08T18:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T18:45:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-08T19:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-08T19:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T19:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T19:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T20:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T20:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T20:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T20:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T12:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T12:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T12:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T12:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T13:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T13:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T13:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T13:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T14:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-09T14:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-09T14:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T14:45:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-09T15:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T15:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T15:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T15:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T16:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T16:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-09T16:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T16:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T17:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-09T17:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T17:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T17:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T18:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T18:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-09T18:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T18:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T19:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-09T19:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T19:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T19:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T20:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T20:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T20:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T20:45:00Z"
            },
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
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T13:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T13:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T13:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T13:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T14:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T14:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T14:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T14:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T15:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T15:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T15:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T15:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T16:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T16:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T16:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T16:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T17:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T17:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T17:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T17:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T18:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T18:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T18:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T18:45:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T19:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T19:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T19:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T19:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T20:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T20:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T20:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T20:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T12:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T12:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T12:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T12:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T13:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T13:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T13:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T13:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T14:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T14:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T14:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T14:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T15:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T15:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T15:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T15:45:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-11T16:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T16:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-11T16:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T16:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T17:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-11T17:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T17:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T17:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T18:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T18:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T18:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T18:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T19:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T19:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-11T19:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T19:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T20:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T20:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T20:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T20:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T12:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T12:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T12:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T12:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T13:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T13:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T13:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T13:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T14:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T14:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T14:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T14:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T15:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T15:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T15:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T15:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T16:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T16:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T16:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T16:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T17:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T17:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T17:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T17:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T18:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T18:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T18:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T18:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T19:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T19:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T19:30:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T19:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T20:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T20:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T20:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T20:45:00Z"
            }
        ]
    },
    {
        behaviorName: "raise hand befire speaking",
        behaviorTracked: [
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T12:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T12:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T12:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T12:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T13:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T13:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T13:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T13:45:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-08T14:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-08T14:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-08T14:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T14:45:00Z"
            },
            {
                behaviorValue: null,
                behaviorDate: "2019-04-08T15:00:00Z"
            },
            {
                behaviorValue: null,
                behaviorDate: "2019-04-08T15:15:00Z"
            },
            {
                behaviorValue: null,
                behaviorDate: "2019-04-08T15:30:00Z"
            },
            {
                behaviorValue: null,
                behaviorDate: "2019-04-08T15:45:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-08T16:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-08T16:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T16:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T16:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T17:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T17:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T17:30:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-08T17:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T18:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T18:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-08T18:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T18:45:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-08T19:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T19:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T19:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T19:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T20:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T20:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T20:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T20:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T12:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T12:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T12:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T12:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T13:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T13:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T13:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T13:45:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-09T14:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-09T14:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T14:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T14:45:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-09T15:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T15:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T15:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T15:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T16:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T16:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-09T16:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T16:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T17:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-09T17:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T17:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T17:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T18:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T18:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-09T18:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T18:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T19:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-09T19:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T19:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T19:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T20:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T20:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T20:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T20:45:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T12:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T12:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T12:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T12:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T13:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T13:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T13:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T13:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T14:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T14:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T14:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T14:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T15:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T15:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T15:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T15:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T16:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T16:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T16:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T16:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T17:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T17:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T17:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T17:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T18:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T18:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T18:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T18:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T19:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T19:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T19:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T19:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T20:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-10T20:15:00Z"
            },
            {
                behaviorValue: null,
                behaviorDate: "2019-04-10T20:30:00Z"
            },
            {
                behaviorValue: null,
                behaviorDate: "2019-04-10T20:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T12:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T12:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T12:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T12:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T13:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T13:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T13:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T13:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T14:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T14:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T14:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T14:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T15:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T15:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T15:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T15:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T16:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T16:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-11T16:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T16:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T17:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-11T17:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T17:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T17:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T18:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T18:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T18:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T18:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T19:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-11T19:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-11T19:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T19:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T20:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T20:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T20:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T20:45:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T12:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T12:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T12:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T12:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T13:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T13:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T13:30:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T13:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T14:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T14:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T14:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T14:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T15:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T15:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T15:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T15:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T16:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T16:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T16:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T16:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T17:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T17:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T17:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T17:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T18:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T18:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T18:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T18:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T19:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T19:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T19:30:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T19:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T20:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T20:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T20:30:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T20:45:00Z"
            }
        ]
    },
    {
        behaviorName: "use your inside voice",
        behaviorTracked: [
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T12:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T12:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T12:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T12:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T13:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T13:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T13:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T13:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T14:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T14:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T14:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T14:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T15:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T15:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T15:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T15:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T16:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T16:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T16:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T16:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T17:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T17:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T17:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T17:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T18:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T18:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T18:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T18:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T19:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T19:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T19:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T19:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T20:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T20:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T20:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-08T20:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T12:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T12:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T12:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T12:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T13:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T13:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T13:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T13:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T14:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T14:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T14:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T14:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T15:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T15:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T15:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T15:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T16:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T16:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T16:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T16:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T17:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T17:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T17:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T17:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T18:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T18:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T18:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T18:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T19:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T19:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T19:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T19:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T20:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T20:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T20:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-09T20:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T12:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T12:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T12:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T12:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T13:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T13:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T13:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T13:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T14:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T14:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T14:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T14:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T15:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T15:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T15:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T15:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T16:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T16:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T16:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T16:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T17:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T17:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T17:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T17:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T18:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T18:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T18:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T18:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T19:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T19:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T19:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T19:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T20:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T20:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T20:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-10T20:45:00Z"
            },
            {
                behaviorValue: null,
                behaviorDate: "2019-04-11T12:00:00Z"
            },
            {
                behaviorValue: null,
                behaviorDate: "2019-04-11T12:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-11T12:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T12:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T13:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T13:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T13:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T13:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T14:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T14:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T14:30:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-11T14:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T15:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T15:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T15:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T15:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T16:00:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-11T16:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-11T16:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T16:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T17:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T17:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T17:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T17:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T18:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T18:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T18:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T18:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T19:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T19:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T19:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T19:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T20:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T20:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T20:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-11T20:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T12:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T12:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T12:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T12:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T13:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T13:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T13:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T13:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T14:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T14:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T14:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T14:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T15:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T15:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T15:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T15:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T16:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T16:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T16:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T16:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T17:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T17:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T17:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T17:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T18:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T18:15:00Z"
            },
            {
                behaviorValue: 0,
                behaviorDate: "2019-04-12T18:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T18:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T19:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T19:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T19:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T19:45:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T20:00:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T20:15:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T20:30:00Z"
            },
            {
                behaviorValue: 1,
                behaviorDate: "2019-04-12T20:45:00Z"
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