const http = require('http')
const url = require('url')

const app = http.createServer()

app.on('request', (req, res) => {
  const urlobj = url.parse(req.url)
  switch (urlobj.pathname) {
    case '/api/aaa':
      res.end(`grassdog(${JSON.stringify({
        name: 'dog',
        age: 18
      })})`)
      break
    default:
      res.end('404')
  }
})

app.listen(3000, () => {
  console.log('server start')
})