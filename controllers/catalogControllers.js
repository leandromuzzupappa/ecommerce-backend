const path = require("path");
const fs = require("fs");

let data = fs.readFileSync("/database/data.json", { encoding: "utf-8" });

const catalogController = {
    getOne: (req, res) => {
        return res.send("<h1>Producto</h1>");
    },
    getAll: (req, res) => {
        // Llamado a la db
        console.log(data);

        return res.render("index");
    },
};

module.exports = catalogController;
