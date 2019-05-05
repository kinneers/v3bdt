const router = require("express").Router();
const adminController = require("../../controllers/adminController");


//Matches with '/api/teacher/behaviors/:id'
router.route('/create/admin')
  .post(adminController.createAdmin);
//.post(teacherController.create);

//Matches with /api/admin/a/:email
router.route("/a/:email")
  .get(adminController.findByEmail)

module.exports = router;
