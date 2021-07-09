const router = require("express").Router();

router.get("/", (req, res) => {
    return res.send("<h1>Catalogo</h1>");
});

router.get("/gallery", (req, res) => {
    return res.send("<h1>Galeria</h1>");
});

router.get("/product", (req, res) => {
    return res.send("<h1>Producto</h1>");
});

module.exports = router;
