const jwt = require('jsonwebtoken')
const secret = "biggrassdog-anydata"

const JWT = {
    generate(value, exprires) {
        return jwt.sign(value, secret, {expiresIn: exprires})
    },
    verify(token) {
        try {
            return jwt.verify(token, secret)
        } catch (err) {
            return false
        }
    }
}

module.exports = JWT
