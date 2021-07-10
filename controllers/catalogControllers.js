const path = require("path");
const fs = require("fs");
const database = require("../db/models");

const catalogController = {
    getOne: (req, res) => {
        // Llamado a la db
        let db = fs.readFileSync("database/data.json", { encoding: "utf-8" });
        const allProducts = JSON.parse(JSON.parse(db));

        /* const selectedProduct = allProducts.filter(
            (product) => product.image === "Image-2.png"
        ); */

        /* Forma 1
        let product = [];
        for (let i = 0; i < allProducts.legth; i++) {
            if (allProducts[i].image === "Image-2.png") {
                product.push(allProducts[i]);
            }
        } */

        /*  Forma 2
        let product = [];
        allProducts.forEach( product => {
            if (product.image === "Image-2.png") {
                product.push(allProducts[i]);
            }
        } ) */

        /* //Forma 3
        const selectedProduct = allProducts.filter((product) => {
            (product.image === "Image-2.png") && product;
        }); */

        const selectedProduct = allProducts.filter(
            (product) => product.image === "Image-2.png"
        );

        console.log(selectedProduct);

        return res.render("pages/product", {
            product: selectedProduct[0],
        });
    },
    getAll: async (req, res) => {
        const __products = await database.products.findAll();

        return res.render("pages/gallery");
    },
};

module.exports = catalogController;
