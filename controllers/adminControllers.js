const db = require("../db/models");

const adminControllers = {
    main: async (req, res) => {
        const products = await db.products.findAll();

        return res.render("pages/admin", {
            products,
        });
    },
    getOne: (req, res) => {
        return res.send("<h1>Un producto</h1>");
    },
    getAll: (req, res) => {
        return res.send("<h1>Trae todos los produtos</h1>");
    },
    create: (req, res) => {
        return res.render("pages/productCreate");
    },
    created: (req, res) => {
        console.log(req.body);

        return;
    },
    update: (req, res) => {
        return res.send("<h1>producto actualizado</h1>");
    },
    delete: (req, res) => {
        return res.send("<h1>Borar</h1>");
    },
};

module.exports = adminControllers;
