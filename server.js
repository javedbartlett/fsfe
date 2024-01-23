const express = require("express");
const server = require("http").createServer();

const app = express();
const PORT = 3001;


app.get('/', (req, res) => {
    res.send("you just got Litt up!", 200);
})

app.get('/main', (req, res) => {
    res.sendFile("index.html", { root: __dirname });
})

server.on('request', app);

server.listen(PORT, () => console.log(`Now listening on port ${PORT} on this Express server....`));


/* Begin Websockets */
const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
    const numClients = wss.clients.size;
    console.log('Clients connected', numClients);

    wss.broadcast(`Current visitors: ${numClients}`);

    if (ws.readyState === ws.OPEN) {
        ws.send("Welcome to Jav's server");
    }

    ws.on('close', function close() {
        wss.broadcast(`Current visitors: ${numClients}`);
        console.log('A client has disconnected')
    })
});

wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        client.send(data);
    })
}
