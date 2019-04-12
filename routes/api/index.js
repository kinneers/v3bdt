const router = require("express").Router();
const bookRoutes = require("./teacher");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
