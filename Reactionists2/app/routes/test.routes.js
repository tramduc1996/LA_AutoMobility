const router = require("express").Router();

const testController = require("../controllers/test.controller");
module.exports = router;

router.get("/:id(\\d+)", testController.getById);
