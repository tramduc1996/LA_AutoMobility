const router = require("express").Router();

const vqiController = require("../controllers/vqi.controller");
module.exports = router;

router.post("/", vqiController.post);
