const router = require("express").Router();
const teacherController = require("../../controllers/teacherController");
const studentController = require("../../controllers/studentController");
const behaviorController = require("../../controllers/studentController");

//Matches with '/api/teacher/behaviors/:id'
router.route('/behaviors/:id')
    .get(teacherController.findAllBehaviorsRefTeacher);
    //.post(teacherController.create);

//Matches with '/api/teacher/student/:id'
router.route('/student/:id')
    .get(studentController.findStudentById);
    //.post(teacherController.create);

//Matches with '/api/teacher/behaviorchart/:id'
router.route('/behaviorchart/:id')
    .get(teacherController.findBehaviorById);
    //.post(teacherController.create);

router.route("/")
  .get(teacherController.findAll)
  .post(teacherController.create);

router
  .route("/:id")
  .get(teacherController.findById)
  .put(teacherController.update)
  .delete(teacherController.remove);

module.exports = router;
