const router = require("express").Router();
const teacherController = require("../../controllers/teacherController");

router.route("/")
  .get(teacherController.findAll)
  .post(teacherController.create);

router
  .route("/:id")
  .get(teacherController.findById)
  .put(teacherController.update)
  .delete(teacherController.remove);

module.exports = router;
