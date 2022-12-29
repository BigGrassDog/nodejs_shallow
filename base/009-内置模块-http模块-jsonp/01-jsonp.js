const http = require('http')
const url = require('url')

const app = http.createServer()

app.on('request', (req, res) => {
  const urlobj = url.parse(req.url,true)
  console.log(urlobj.query.callback);
  switch (urlobj.pathname) {
    case '/api/aaa':
      res.end(`${urlobj.query.callback}(${JSON.stringify({
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