
import Configuration from '../../Configuration'
import * as jwt from 'jsonwebtoken'

function signToken(username) {
    return jwt.sign(username, Configuration.jwtSecret)
}

function verifyToken(req, res, next) {

    const token = req.get('token') || req.body.token || req.query.token

    if (!token) {
        res.status(401)
        return res.json({ success: false, message: "No token provided" })
    }

    jwt.verify(token, Configuration.jwtSecret, (err, decodedData) => {
        // if problem with token verification, deny access
        if (err) {
            res.status(401)
            return res.send({ success: false, message: "Invalid token." })
        }

        // TODO: need to check here if user exist in db/redux 
        next()
    })
}

export default {
    signToken,
    verifyToken
}