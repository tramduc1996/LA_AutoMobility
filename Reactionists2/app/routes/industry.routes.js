const router = require("express").Router();

const industryController = require("../controllers/industry.controller");
module.exports = router;

router.get("/:id(\\d+)", industryController.getById);
router.get("/", industryController.getAll);

router.post("/", industryController.post);
router.put("/:id", industryController.put);
router.delete("/:id", industryController.del);
