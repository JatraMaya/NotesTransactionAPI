const hyperId = require("hyperid");

function auth(req, res, next) {
    const authorization = req.headers.authorization;

    if (authorization) {
        const token = authorization.split(" ")[1];
        const isValidToken = hyperId.decode(token);
        if (!isValidToken) {
            res.status(401).send("User unauthorized!");
            return;
        }
        next();
    } else {
        res.status(401).send("User unauthorized!");
        return;
    }
}

module.exports = auth;
