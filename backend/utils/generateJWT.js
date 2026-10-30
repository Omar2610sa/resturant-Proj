const jwt = require('jsonwebtoken');

module.exports = async (payload) => {
    const token = await jwt.sign(payload, process.env.JWR_SECRT_KEY, { expiresIn: "30m" })
    return token
}