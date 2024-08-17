const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const db = require("./connection");

// importing cardRoute
const cardRoutes = require("./routes/cardRoutes");

app.use(express.json()); // for parsing icoming body requests

app.get("/ping", (req, res) => {
  res.send("Server is running and is connected with frontend!");
});

// routes
app.use("/cards", cardRoutes);

app.listen(port, () => console.log(`Listening on port ${port}!`));

// const cors = require("cors");

// app.use(
//   cors({
//     origin: "http://localhost:5173/", // The port where Vite is running
//   })
// );
