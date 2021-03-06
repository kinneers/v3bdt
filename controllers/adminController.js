const db = require("../models");

// Defining methods for the adminController
module.exports = {

    findAllBehaviors: function(req, res) {
        db.Behavior
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err=> res.status(422).json(err));
    },

    createUser: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Create teacher
    createTeacher: function(req, res) {
        db.Teacher
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    createAdmin: function(req, res) {
        db.Admin
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findByEmail: function(req, res) {
        db.Admin
            .findOne({ userName: req.params.email })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Create student
    createStudent: function(req, res) {
        db.Student
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Get all teachers
    getAllTeachers: function(req, res) {
        db.Teacher
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Get all students
    getAllStudents: function(req, res) {
        db.Student
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    
    //Links student to teacher
    linkStudentToTeacher: function(req, res) {
        let sentIds = req.body;
        console.log(req.body);
        db.Teacher
            .findOneAndUpdate(
                { '_id': sentIds.chosenTeacher },
                { $push: { 'students': sentIds.chosenStudent } },
                { upsert: true }
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    
    //Links teacher to student
    linkTeacherToStudent: function(req, res) {
        let sentIds = req.body;
        console.log(req.body);
        db.Student
            .findByIdAndUpdate(
                { _id: sentIds.chosenStudent },
                { $push: { teachers: sentIds.chosenTeacher } },
                { upsert: true }
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Creates a new behavioral goal
    createGoal: function(req, res) {
        db.Behavior
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Links new goal to student
    sendBxToStudent: function(req, res) {
        db.Student
            .findByIdAndUpdate(
                { "_id": req.params.id },
                { $push: { behaviors: req.body.newBxId } },
                { upsert: true }
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Links new goal to teacher
    sendBxToTeacher: function(req, res) {
        db.Teacher
            .findByIdAndUpdate(
                { "_id": req.params.id },
                { $push: { behaviors: req.body.newBxId } },
                { upsert: true }
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};