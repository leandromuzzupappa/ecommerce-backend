const path = require("path");
const fs = require("fs");

const catalogController = {
    getOne: (req, res) => {
        return res.send("<h1>Producto</h1>");
    },
    getAll: (req, res) => {
        // Llamado a la db
        let db = fs.readFileSync("database/data.json", { encoding: "utf-8" });
        const allProducts = JSON.parse(JSON.parse(db));

        return res.render("index", {
            products: allProducts,
        });
    },
};

module.exports = catalogController;
