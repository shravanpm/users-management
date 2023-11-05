const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://shravan:DkbL3ngegbUvBG2x@cluster0.qmixdbd.mongodb.net/users?retryWrites=true&w=majority"
  );
};

module.exports = connect;
