const router = require("express").Router();
const teacherController = require("../../controllers/teacherController");

// //Matches with '/api/behaviors/'
// router.route('/behaviors')
//     .get(teacherController.findAllBehaviorsRefTeacher);
//     //Once admin page is set up to add behaviors (delete semicolon on line 6 and uncomment below)
//     //.post(teacherController.create);
    

router.route("/")
  .get(teacherController.findAll)
  .post(teacherController.create);

router
  .route("/:id")
  .get(teacherController.findById)
  .put(teacherController.update)
  .delete(teacherController.remove);

module.exports = router;
