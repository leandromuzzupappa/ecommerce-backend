const mainControllers = {
    home: (req, res) => {
        return res.send("<h1>inicio</h1>");
    },

    faq: (req, res) => {
        return res.send("<h1>FAQ</h1>");
    },
};

module.exports = mainControllers;
