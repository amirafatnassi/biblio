const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
mongoose
  .connect("mongodb://127.0.0.1/bibliotheque")
  .then(() => {
    console.log("db working");
  })
  .catch((error) => {
    console.log(error);
  });

mongoose.Promise = global.Promise;