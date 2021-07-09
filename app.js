require("dotenv").config();

const express = require("express");
const app = express();

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto: ${PORT}`);
});

/* MVC - MVCR
    modelo / model -- datos
    vista / view -- front
    controlador / controller -- logica 
    rutas / routes
*/

// app.get('/ruta', callback)
const mainRoutes = require("./routes/mainRoutes");
const catalogRoutes = require("./routes/catalogRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/", mainRoutes);
app.use("/catalog", catalogRoutes);
app.use("/admin", adminRoutes);

app.use("*", (req, res) => {
    return res.send("<h1>404</h1>");
});

/* 
    PUG
    HANDLEBARS
    EJS
*/
