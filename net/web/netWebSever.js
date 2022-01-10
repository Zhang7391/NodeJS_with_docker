const net = require("net");


let server = net.createServer((socket) =>
{
	socket.write("Hello world!");

	socket.on("data", (data) =>
	{
		let info = socket.address();
		console.log(info["address"]+info["port"]+": "+data+"");
		socket.write("Hello world!");
	});

	socket.on("end", () => {;});
	socket.on("error", (error) => {;});
});

server.listen(80);
