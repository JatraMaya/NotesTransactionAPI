const express = require("express");
const db = require("../controller/dbController");
const app = express.Router();

app.post("/register", (req, res) => {
    const user = db.add("users", req.body);
    if (!user) {
        res.status(400).send(user);
    } else {
        res.send(result);
    }
});

module.exports = app;
