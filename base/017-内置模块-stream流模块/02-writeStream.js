const fs = require('fs')

const ws = fs.createWriteStream('./2.txt', 'utf-8')

ws.write('11111111\n')
ws.write('2222222\n')
ws.write('333333\n')
ws.write('44444\n')
ws.write('55555\n')
ws.write('66666\n')
ws.write('111117777111\n')

ws.end()