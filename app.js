const http = require("http");
const PORT = 3002;

const server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.write("You just got Litt up!");
	res.end();
});

server.listen(PORT, () => console.log(`Javed's server started on port ${PORT}`));
