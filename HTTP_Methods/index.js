import http from "http"
import fs from "fs"
import url from "url"

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();

    const log = `${Date.now()}: ${req.method} New request received from url: ${req.url}\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    fs.appendFile('newLog.txt', log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("Home");
                break;
            case "/about":
                const username = myUrl.query.username
                res.end(`Hi, ${username}`);
                break;
            default:{
                res.end("404 Page Not found")
            }
        }
    })
    
})

const port = 8000

myServer.listen(port, () => {
    console.log(`Server started at port ${port}`);
})
