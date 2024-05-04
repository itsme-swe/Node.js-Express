// Example for Query Parameters ? 


import http from "http"     // Creating server by usig http module
import fs from "fs"         // Usig fs module to write the log file 
import url from "url"       // URL module is used to parse the request url

const myServer = http.createServer((req, res) => {

    if (req.url === '/favicon.ico') return res.end();

    // This line creates a long strig that includes the current timestamp and the requested URL 
    const log = `${Date.now()}: New request received from URL: ${req.url}\n`;   

    // Line parses the request URL into an object and logs it to the console 
    const myUrl = url.parse(req.url, true)
    console.log(myUrl);
    
    // Line append the long string into the file name 'log.txt', if the file doesn't exist it will be created.
    fs.appendFile('log.txt', log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end(`Home Page`)
                break;
            case "/about-us":
                const username = myUrl.query.username  // If the path is '/about-us', extract the username from query parameter and respond with persoalized greeting 
                res.end(`Hi, ${username}`)
                break;
            default:
                res.end("404 Not Found")
        }
    })
})

const port = 5000

myServer.listen(port, () => {
    console.log(`Server Listening at ${port}`);
    
})

/* output we get by using URL Module

    Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?harshMehra&userID=2',
  query: 'harshMehra&userID=2',
  pathname: '/contact',
  path: '/contact?harshMehra&userID=2',
  href: '/contact?harshMehra&userID=2'
}
*/