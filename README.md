This repo is a companion to my mega post on using Node fs (https://iamdev.net/fs-node-the-ultimate-async-guide/). If there are any issues then please leave them in the comments of that post and I'll fix the code!

Get Setup to Run the fs Code Yourself:

1. Clone this repository. Either use Github desktop or download the zip directly on this page.

2. Open the code in VS Code

3. Open a terminal in VS Code

4. Run the command to install the modules: 
    npm i

5. Start the server with command: 
    node index.js

6. Test the various fs functions for yourself:

6a. Change the function in the test() method at the end of the index.js file. For example:

function test () {
    writeBasicFile() //change this function call 
}

7. Restart the server (Ctrl / Cmd + c to stop it first, then "node index.js" to start)

8. You should see the output in your console from the operation + any changes in the root project files, depending on your called function