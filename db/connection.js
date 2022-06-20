const { connect, connection } = require("mongoose");

const initDB = () => {
  connect(process.env.MONGO_URL);
  connection
    .once("open", () => console.log("mongoDB is ready"))
    .on("error", (error) => console.log("error", error));
};

module.exports = initDB;
