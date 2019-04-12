const router = require("express").Router();
const teacherController = require("../../controllers/teacherController");

// Matches with "/api/books"
router.route("/")
  .get(teacherController.findAll)
  .post(teacherController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(teacherController.findById)
  .put(teacherController.update)
  .delete(teacherController.remove);

module.exports = router;
