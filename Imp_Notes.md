## Node.js
**Node.js** is just runtime environment for javascript.

### File Handling 
In node js file handling is done by **fs module** , so we need to import **fs module** first, and this is built-in node.js module.

    const fs = require("fs")

Now we'll create new file using **fs module** by Synchronous and Async Method:

    🔸fs.writeFileSync('./sync_method.js', "console.log('Hello World')")     // Synchronous method

    🔸fs.writeFile('./async_method.js', 'console.log("I am async")', (err) => console.log(err))   // Async Method

    🔸The only difference b/w both method is one take callBack function as parameter to handle errors and Sync method donot take callBack function.

Now we'll read existing file using **fs module** by Synchronous and Async Method:

    🔸const data = fs.readFileSync('../Imp_LinuxCommands.md', "utf-8")
    console.log(data);

    🔸fs.readFile('./sync.js', "utf-8", (err, result) => {        // Async Method
        if (err){
            console.log("Error: ", err);
        } else{
            console.log(result);

        }
    })

    🔸Note :- The only difference b/w both the methods is Sync method return the value and Async Method donot return any value. 

 