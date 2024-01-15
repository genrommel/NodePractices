const http = require('node:http')
const { findAvailablePort } = require('./10-free-port')
const server = http.createServer((req, res) => {
  console.log('Request received')
  res.end('Hola mundo')
})

server.listen(0, () => {
  console.log(`Server listening on port ${server.address().port}`)
  server.close(() => {
    console.log('closing http server')
  })
})

findAvailablePort(1324).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
