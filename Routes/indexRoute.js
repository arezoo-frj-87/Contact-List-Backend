const router = require("express").Router();
const { index } = require("../Controllers/indexController");

router.get("/", index);
module.exports = router;
