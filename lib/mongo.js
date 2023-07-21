const mongoose = require("mongoose");
const config = require("../config");

mongoose.connect("mongodb://localhost:27017/grpc", {
  useNewUrlParser: true,
  useFindAndModify: false,
});
mongoose.Promise = global.Promise;
mongoose.connection.on("error", (err) => {
  if (err) {
    console.log(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
  } else {
    console.log("db connected");
  }
});
