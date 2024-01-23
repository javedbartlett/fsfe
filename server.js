const express = require("express");
const server = require("http").createServer();

const app = express();
const PORT = 3001;


app.get('/', (req, res) => {
    res.send("you just got Litt up!", 200);
})

server.on('request', app);

server.listen(PORT, () => console.log(`Now listening on port ${PORT} on this Express server....`));
