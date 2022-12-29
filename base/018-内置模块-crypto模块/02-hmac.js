const crypto = require('crypto')

const hmac = crypto.createHmac('md5','biggrassdog')

hmac.update('grass dog')

console.log(hmac.digest('hex'));