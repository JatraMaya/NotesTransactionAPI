const express = require("express");
const hyperId = require("hyperid");
const db = require("../controller/dbController");

const app = express.Router();

app.post("/login", (req, res) => {
    const user = db.get("users", req.body);
    if (user) {
        const token = hyperId();
        user.token = token;
        res.status(200).send("User succesfully login");
    } else {
        res.status(404).send("User not found");
    }
});

module.exports = app;
