// error  “401 Unauthorized Access”.
// error "403 Forbidden" indicates that the server understood the request but refused to process it


const jwt = require('jsonwebtoken');
const secretKey = 'development-full-stack';

module.exports = (req, res, next) => {

    const token = req.header('Authorization');
    if (!token) return res.sendStatus(401);

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();


    });


};
