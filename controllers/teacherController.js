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

    //Saves the ratings to the database... not sure why, but the inc is doubling everything (will just factor that into the math until a fix is found)
    saveRatings: function(req, res) {
        let newData = req.body;
        console.log(newData);
        console.log(req.body);
        db.BehaviorData
            .findOneAndUpdate(
<<<<<<< HEAD
                { behavior: "5cc25dd07e773b3e9f1584e3", behaviorDate: '04/30/2019'},
                {$set:{ behaviorDate: '04/30/2019', behavior: "5cc25dd07e773b3e9f1584e3"}, $inc:{behaviorCount: 1, behaviorTotal: 1}}, { upsert: true }            )
=======
                { behavior: newData.behavior, behaviorDate: newData.behaviorDate },
                {$inc:{behaviorCount: newData.behaviorCount, behaviorTotal: newData.behaviorTotal},
                $set:{ behaviorDate: newData.behaviorDate, behavior: newData.behavior}}, 
                { upsert: true })
>>>>>>> bbc8538f610db3ab315fad68b8a30da864919a1e
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //Gets the data required to create a given behavior's progress chart
    getChartData: function(req, res) {
        db.BehaviorData
            .find({ behavior: req.params.id })
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