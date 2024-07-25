const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 2482;

// Set the 'views' directory for EJS files
app.set("Views", path.join(__dirname, "/Views"));
app.use(express.static(__dirname + "/Public"));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Define routes
app.get("/", (req, res) => {
  // Render index.ejs
  res.render("index");
});

app.get("/index", (req, res) => {
  // Render index.ejs
  res.render("index");
});

app.get("/guide", (req, res) => {
  // Render signin.ejs
  res.render("guide");
});

app.get("/aboutus", (req, res) => {
  // Render signin.ejs
  res.render("aboutus");
});

app.get("/signup", (req, res) => {
  // Render signup.ejs
  res.render("signup");
});

app.get("/joinus", (req, res) => {
  // Render signup.ejs
  res.render("joinus");
});

app.get("/signin", (req, res) => {
  // Render signup.ejs
  res.render("signin");
});

app.get("/help", (req, res) => {
  // Render signup.ejs
  res.render("help");
});
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
