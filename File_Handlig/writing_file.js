const fs = require("fs")


fs.writeFileSync('./sync_file.txt', 'I am Synchronus File')     // Sync Method / Blocking

fs.writeFile('./async_file.txt', 'I am in Asyc File', (err) => console.log(err))        // Async Method / Non-Blocking








