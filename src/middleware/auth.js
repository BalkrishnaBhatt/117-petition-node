const jwt = require('jsonwebtoken')
const User = require('../models/user')
const key = require('./../config/key')

const auth = (roles = []) => {
    return async (req, res, next) => {
        try {
            if (!req.header('Authorization')) {
                res.status(401).send({ error: 'Access denied' })
            }

            const token = req.header('Authorization').replace('Bearer ', '')
            const decoded = jwt.verify(token, key.secretKey)
            const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

            if (!user) {
                throw new Error()
            }

            if(roles.length !== 0 && !roles.includes(user.role)){
                res.status(401).send({ error: 'Access denied' })
            }

            req.token = token
            req.user = user
            next()
        } catch (e) {
            res.status(401).send({ error: 'Authentication failed' })
        }
    }
}

module.exports = auth