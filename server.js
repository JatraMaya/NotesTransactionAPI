const express = require("express");
const app = express();

// ============= Routes Import ============= //
const rootRoute = require("./routes/rootRoute");
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const getTransactionsRoute = require("./routes/transactions/getTransactions");
const addTransactionsRoute = require("./routes/transactions/addTransactions");

app.use(express.json());
app.use(rootRoute);
app.use(registerRoute);
app.use(loginRoute);
app.use(getTransactionsRoute);
app.use(addTransactionsRoute);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
