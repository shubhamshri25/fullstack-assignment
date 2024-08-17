const mongoose = require("mongoose");

const connectionString = process.env.MONGODB_URI;
mongoose
  .connect(`${connectionString}`)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MOngoDB connection error", err));

const db = mongoose.connection;

module.exports = db;
