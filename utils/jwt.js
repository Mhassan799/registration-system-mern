const User = require('../model/userModel')
const jwt = require('jsonwebtoken')

const secretKey = "hassan"

const jwtConfig = {
    sign(payload){
        const token = jwt.sign(payload,secretKey)
        return token
    },
    verifyToken(req,res,next){
        const token = req.headers.authorization?.split(' ')[1];
        if(!token){
            return res.status(401).json({message : 'no token provided  '})
        }
        try {
            const  decoded = jwt.verify(token , secretKey);
            console.log(decoded)
            req.userId = decoded.userId;
            next();
        } catch (error) {
            return res.status(401).send({
                message: "invalid token"
            })
        }
    }
}

module.exports = jwtConfig;