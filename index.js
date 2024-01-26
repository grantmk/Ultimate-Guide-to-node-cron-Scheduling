const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
console.log("Server running on port 3000")

function writeBasicFile () {
  console.log("writeBasicFile called")
  
}

function test () {
  writeBasicFile()
}
test()