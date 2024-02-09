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
  const success = await streamTextToFileHandleFileClose("Example text")

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
  //NOTE: This function combines createWriteStream AND writes to file.
  // in reality you should separate these 2, only creating the stream once!
  try {
    let writer = await fs.createWriteStream("person-stream.txt", {
      encoding: "utf8",
      highWaterMark: 16384,
      flags: "a" //open and append (don't overwrite file). Omitting this will overwrite whole file.
    })
    await writer.write(text)
    await writer.write("\r") //create a new line
    return true
  } catch (err) {
    console.error('Error occurred while writing file:', err)
    return false
  }
}

async function streamTextToFileHandleFileClose(text) {
  // Open a file, turn off auto close, implement a file close function ourselves
  // and write to log on successful close
  try {
    let writer = await fs.createWriteStream("person-stream.txt", {
      encoding: "utf8",
      highWaterMark: 16384,
      autoClose: false,
      emitClose: true,
      flags: "a"
    })

    //add a listener with options such as open, close, ready etc
    writer.addListener("open", (fd) => {
      console.log("File opened: ")
      console.log(fd)
    })

    await writer.write(text)
    await writer.write("\r") //create a new line
    writer.close(() => {
      console.log("File closed!")
    })
    return true
  } catch (err) {
    console.error('Error occurred while writing file:', err)
    return false
  }
}

//END section - stream writes
/* ************************ */
