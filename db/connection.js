const { connect, connection } = require("mongoose");

const initDB = () => {
  connect("mongodb://localhost/e-commerce");
  connection
    .once("open", () => console.log("mongoDB is ready"))
    .on("error", (error) => console.log("error", error));
};

module.exports = initDB;
