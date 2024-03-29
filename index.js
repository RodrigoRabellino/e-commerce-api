require("dotenv").config();
const express = require("express");
const Routes = require("./routes");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const port = process.env.APP_PORT || 3022;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Routes(app);
require("./db/connection")();

app.listen(port, () => console.log("listen port: " + port));
