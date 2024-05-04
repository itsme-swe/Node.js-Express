const fs = require("fs")

// Sync Method
const data = fs.readFileSync('./sync_file.txt', "utf-8")
console.log(data);



// Asyc Method
fs.readFile('./async_file.txt', "utf-8", (err, result) => {     
    if (err){
        console.log("Error: ", err);
    } else{
        console.log(result);
        
    }
})