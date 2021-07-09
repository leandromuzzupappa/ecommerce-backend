const router = require("express").Router();

const adminControllers = require("../controllers/adminControllers");

router.get("/", adminControllers.main);

router.get("/create", adminControllers.create);
router.post("/create", adminControllers.created);

router.get("/:id", adminControllers.getOne);
router.put("/:id/edit", adminControllers.update);
router.delete("/:id/delete", adminControllers.delete);

module.exports = router;
