require("dotenv").config();

const express = require("express");
const ejs = require("ejs");
const app = express();

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto: ${PORT}`);
});

app.set("view engine", "ejs");
app.use(express.static("public"));

const mainRoutes = require("./routes/mainRoutes");
const catalogRoutes = require("./routes/catalogRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/", mainRoutes);
app.use("/catalog", catalogRoutes);
app.use("/admin", adminRoutes);

app.use("*", (req, res) => {
    return res.send("<h1>404</h1>");
});
