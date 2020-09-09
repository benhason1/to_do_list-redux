import Configuration from '../../Configuration';
import * as jwt from 'jsonwebtoken';
import reduxStore from '../../Redux';

function signToken(username) {
    return jwt.sign(username, Configuration.jwtSecret);
}

function verifyToken(req, res, next) {

    const token = req.get('token') || req.body.token || req.query.token;

    if (!token) {
        res.status(401);
        return res.json({ success: false, message: "No token provided" });
    }

    jwt.verify(token, Configuration.jwtSecret, (err, decodedData) => {
        // if problem with token verification, deny access
        if (err) {
            res.status(401);
            return res.send({ success: false, message: "Invalid token." });
        }
        let user = reduxStore.getState().UserReducer.users.filter((user) => user.content.token == token)[0]
        if (!user)
            return res.send({ success: false, message: "User doesnt exist." });
        req.user = user
        next();
    })
}

export default {
    signToken,
    verifyToken
}