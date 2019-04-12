const router = require("express").Router();
const teacherRoutes = require("./teacher");

// Book routes
router.use("/teacher", teacherRoutes);

module.exports = router;
