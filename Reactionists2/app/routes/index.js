const router = require("express").Router();
const industryRoutes = require("./industry.routes");
const testRoutes = require("./test.routes");
const vqiRoutes = require("./vqi.routes");

module.exports = router;

router.use("/api/industry", industryRoutes);
router.use("/api/test", testRoutes);
router.use("/api/vqi", vqiRoutes);
