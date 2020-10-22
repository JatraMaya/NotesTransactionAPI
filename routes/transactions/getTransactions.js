const express = require("express");
const auth = require("../../middleware/authMiddleware");
const db = require("../../controller/dbController");
const app = express.Router();

app.use(auth);

app.get("/transactions", (req, res) => {
    const transactions = db.get("transactions", req.body.query);
    res.status(200).json({ transactions });
    return;
});

module.exports = app
