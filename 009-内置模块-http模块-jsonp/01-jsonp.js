const http = require('http')

const app = http.createServer()

app.on('request', (req, res) => {
  
})

app.listen(3000, () => { 
  console.log('server start');
})