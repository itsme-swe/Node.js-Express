// const http = require("http")   old method 

import http from "http"     // new method

const myServer = http.createServer((req, res) => {
    console.log(`New request received ${req}`);
    res.end(`Hello from server`)
    
});

myServer.listen(3000, () => console.log('Server Started !!')
)