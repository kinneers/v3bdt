const router = require("express").Router();
const adminController = require("../../controllers/adminController");

//Matches with '/api/teacher/behaviors/:id'
// router.route('/create/admin')
    // .post(adminController.createAdmin);
    //.post(teacherController.create);

router.route('/behaviors')
    .get(adminController.findAllBehaviors);

//Matches with '/api/admin/a/:email'
router.route('/a/:email')
    .get(adminController.findByEmail)

//Matches with 'api/admin/adduser'
router.route('/adduser')
    .post(adminController.createUser);

// Matches with 'api/admin/addnewadmin'
router.route('/addnewadmin')
    .post(adminController.createAdmin);

//Matches with 'api/admin/addnewteacher'
router.route('/addnewteacher')
    .post(adminController.createTeacher);

//Matches with 'api/admin/addnewstudent'
router.route('/addnewstudent')
    .post(adminController.createStudent);

//Matches with 'api/admin/getallteachers'
router.route('/getallteachers')
    .get(adminController.getAllTeachers);

//Matches with 'api/admin/getallstudents'
router.route('/getallstudents')
    .get(adminController.getAllStudents);

//Matches with 'api/admin/linkstudenttoteacher'
router.route('/linkstudenttoteacher')
    .put(adminController.linkStudentToTeacher);

//Matches with 'api/admin/linkteachertostudent'
router.route('/linkteachertostudent')
    .put(adminController.linkTeacherToStudent);

module.exports = router;
