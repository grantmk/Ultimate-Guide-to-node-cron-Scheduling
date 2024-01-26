const express = require('express')
const app = express()
const fs = require("fs");
const fsp = require('fs/promises')

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
console.log("Server running on port 3000")

//START section - basic writes
const textToWrite = "Grant iAmDev"

function writeBasicFileCallback () { //callback version, reference ONLY
  console.log("writeBasicFile called")
  fs.writeFile("person-callback.txt", textToWrite, "utf8", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("writeBasicFile - file saved");
  });
}

async function writeBasicFilePromise() { //async promise version
  try {
    await fsp.writeFile("person-promise.txt", textToWrite, "utf8")
    return true
  } catch (err) {
    console.error('Error occurred while writing file:', err)
    return false
  }
}
//END section - basic writes

async function test () {
  console.log("START test function call")
  const success = await writeBasicFilePromise()
  console.log("File write successful? : " + success)
  console.log("END test function call")
}
test()