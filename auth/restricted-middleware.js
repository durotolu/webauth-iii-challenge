const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    //whitelist and blacklist check

    if (token) {
        jwt.verify(
            token,
            process.env.NODE_ENV === 'development' ? 'super secret' : process.env.SECRET,
            (err, decodedToken) => {
                if(err) {
                    res.status(401).json({ message: err.message })
                } else {
                    req.decodedToken = decodedToken;
                    next();
                }
            }
        )
    } else {
        res.status(400).json({ message: 'No credentials provided' });
    }
}