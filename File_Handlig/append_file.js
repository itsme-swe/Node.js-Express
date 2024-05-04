// Now adding data into existig file using Sync and Async Method
const fs = require("fs")

fs.appendFileSync('./sync_file.txt', `${Date.now()} Hey there\n`)       // Sync Method

console.log(fs.statSync('../Imp_LinuxCommands.md'));
