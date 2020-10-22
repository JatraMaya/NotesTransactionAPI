const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
    res.send(`<h1>Hello World!</h1>`);
});

module.exports = app;
