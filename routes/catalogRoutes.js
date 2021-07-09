const router = require("express").Router();

const catalogController = require("../controllers/catalogControllers");

router.get("/", (req, res) => {
    return res.send("<h1>Catalogo</h1>");
});

router.get("/gallery", catalogController.getAll);

router.get("/product", catalogController.getOne);

module.exports = router;
