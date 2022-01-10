const net = require("net");


let server = net.createServer((socket) =>
{
	socket.write("Hello world!");

	socket.on("data", (data) =>
	{
		console.log(socket.remoteAddress+"("+socket.remotePort+"): "+data+"");
		socket.write("Hello world!");
	});

	socket.on("end", () => {;});
	socket.on("error", (error) => {;});
});

server.listen(80);
