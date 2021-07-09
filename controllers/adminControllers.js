const adminControllers = {
    main: (req, res) => {
        return res.send("<h1>Dashboard</h1>");
    },
    getOne: (req, res) => {
        return res.send("<h1>Un producto</h1>");
    },
    getAll: (req, res) => {
        return res.send("<h1>Trae todos los produtos</h1>");
    },
    create: (req, res) => {
        return res.send("<h1>Crear</h1>");
    },
    created: (req, res) => {
        return res.send("<h1>producto creado</h1>");
    },
    update: (req, res) => {
        return res.send("<h1>producto actualizado</h1>");
    },
    delete: (req, res) => {
        return res.send("<h1>Borar</h1>");
    },
};

module.exports = adminControllers;
