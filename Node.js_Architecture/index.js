const fs = require("fs")

// First we'll create one file
// fs.writeFile('./contacts.txt', 'Harsh: 9571299002, \n Mom: 900090022', (err, result)=>{
//     if (err){
//         throw err
//     } else{
//         console.log(result);
        
//     }
// })

// Now we'll read that file using Blocking type operation

console.log(1);

const data = fs.readFileSync('./contacts.txt', 'utf-8')
console.log(data);

console.log(2);

/* output of Blocking-operation  

    1
    Harsh: 9571299002,
    Mom: 900090022
    2
*/ 

// Now we'll perform same operation by using non-blocking type
console.log();

console.log('Hello');

fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
    if (err){
        throw err
    } else {
        console.log(result);
        
    }
})

console.log("World");

/* Output of non-blocking operation

Hello
World
Harsh: 9571299002,
Mom: 900090022

*/




