const express = require("express");
const auth = require("../../middleware/authMiddleware");
const db = require("../../controller/dbController");
const app = express.Router();

app.use(auth);

app.post("/transactions", (req, res) => {
    const body = req.body;
    const transactions = db.add("transactions", body);
    if (transactions) {
        res.status(200).json({ message: "Add transaction success", transactions });
    } else {
        res.status(400).send("Bad Format");
    }
});

module.exports = app;
