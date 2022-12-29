const crypto = require('crypto')

const hash = crypto.createHash('md5')
// const hash = crypto.createHash('sha1')

hash.update('grass dog')

console.log(hash.digest('hex'));