const router = require("express").Router();
const teacherController = require("../../controllers/teacherController");

//Matches with '/api/behaviors/'
router.route('/behaviors/:id')
  .get(teacherController.findAllBehaviorsRefTeacher);
//.post(teacherController.create);

router.route('/behaviors/')
  .get(teacherController.findAllBehaviorsRefTeachers);
//.post(teacherController.create);

router.route("/")
  .get(teacherController.findAll)
  .post(teacherController.create);

router
  .route("/:id")
  .get(teacherController.findById)
  .put(teacherController.update)
  .delete(teacherController.remove);

router
  .route("/a/:email")
  .get(teacherController.findByEmail)
module.exports = router;
