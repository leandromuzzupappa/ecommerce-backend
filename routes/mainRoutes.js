const router = require("express").Router();

const mainControllers = require("../controllers/mainControllers");

router.get("/", mainControllers.home);

router.get("/faq", mainControllers.faq);

module.exports = router;
