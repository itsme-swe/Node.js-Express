import http from "http"
import fs from "fs"

const port = 8000
const myServer = http.createServer((req, res) => {

    const log = `${Date.now()}: ${req.url} New req received\n`;

    fs.appendFile('log.txt', log, (err, data) => {
        switch (req.url){
            case "/":
                res.end("Home Page")
                break;
            case "/about":
                res.end("I am Harsh Mehra")
                break;
            default:
                res.end("404 Not Found")
        }
        
    })

})

myServer.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})