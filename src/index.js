require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();

// asset
app.use(express.static("src/methods-public"));
// asset
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

// begin router section
const people = require("./routes/people");
const auth = require("./routes/auth");
// end router section

app.use("/api/people", people);
app.use("/login", auth);

// app.use('/', router);
const port = process.env.SERVER_PORT;
const host = "localhost";
app.listen(port, host, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
