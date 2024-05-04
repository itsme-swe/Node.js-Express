import http from "http"; // ES modules import syntax

const myServer = http.createServer((req, res) => {
    console.log(`New request received`);
    res.end(`<h2>Hello from Server</h2>`);
});

const PORT = 3000;

myServer.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


