//This is basic express server. All code is stored in index.js for my node fs article
//To find a particular function simple search for it!

const express = require('express')
const app = express()
const fs = require("fs");
const fsp = require('fs/promises')

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
console.log("Server running on port 3000")

//change your function call here to test anything in this file
async function test() {
  console.log("START test function call")

  //CHANGE THIS LINE then restart server
  const success = await streamTextToFile("Example text")

  console.log("File write successful? : " + success)
  console.log("END test function call")
}
test()

/* ************************ */
//START section - basic writes
const textToWrite = "Grant iAmDev"

function writeBasicFileCallback() { //callback version, reference ONLY
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
/* ************************ */


/* ************************ */
//START section - stream writes
async function streamTextToFile(text) {
  try {
    let writer = await fs.createWriteStream("person-stream.txt", {
      encoding: "utf8",
      highWaterMark: 16384,
      flags: {
        
      }
    })
    await writer.write(text)
    return true
  } catch (err) {
    console.error('Error occurred while writing file:', err)
    return false
  }
}

//END section - stream writes
/* ************************ */
