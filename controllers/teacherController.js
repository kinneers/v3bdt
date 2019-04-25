const db = require("../models");

// Defining methods for the TeachersController
module.exports = {
    //Get each behavior related to the teacher
    findAllBehaviorsRefTeacher: function(req, res) {
        db.Teacher
            .findById(req.params.id)
            .populate("behaviors")
            .populate("students")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Gets the data associated with a specific behavior
    findBehaviorById: function(req, res) {
        db.Behavior
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Get each student related to the teacher
    findAllStudentsRefTeacher: function(req, res) {
        db.Teacher
            .findById(req.params.id)
            .populate("students")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Gets all behaviors
    findAllBehaviorsRefTeachers: function(req, res) {
        db.Teacher
            .find(req.query) //we're not passing req.query
            .populate("behaviors")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // //Finds the behaviorData collection for the current behavior and day and updates or, if no collection for the day yet exists, creates it
    // saveRating: function(req, res) {
    //     db.BehaviorData
    //         .findOneAndUpdate(req.query, req.dataToSend, {upsert: true}, function(err, doc) {
    //             if (err) return res.send(500, {error: err});
    //             return res.send('Successfully saved');
    //         });
    // },
    saveRatings: function(req, res) {
        db.BehaviorData
            .findOneAndUpdate(
                { behavior: "5cc22d40b2a0e75ab26b1564", behaviorDate: '04/08/2019'},
                {$set:{ behaviorDate: '04/08/2019', behavior: "5cc22d40b2a0e75ab26b1564"}, $inc:{behaviorCount: 1, behaviorTotal: 1}}, { upsert: true }            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findAll: function(req, res) {
    db.Teacher
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Teacher
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.Teacher
      .findOne({
        userName: req.params.email,
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Teacher
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Teacher
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Teacher
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};