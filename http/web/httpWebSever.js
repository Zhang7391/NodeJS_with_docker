const fs = require('fs');
const url = require('url');
const http = require("http");


const server = http.createServer((request, response) =>
{
	let path = url.parse(request.url).pathname
	
	switch(path)
	{
	case "/":
		{
			response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
			response.write("<!DOCTYPE html><html><head><meta http-equiv=\"refresh\" content=\"1;url=/index\"></head></html>");
			response.end();
		}
	case "/index":
		{
			fs.readFile("./index.html", "utf8",(error, content) =>
			{
				if(error)
				{
					response.writeHead(500);
					response.end(error);
					return;
				}
				response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
				response.end(content.toString());
			});
		}
	}

	if(request.method === "GET" && path === "/logo.ico")
	{
		response.writeHead(200, {"Content-Type":"image/vnd.microsoft.icon"});
		fs.createReadStream(__dirname + "/logo.ico").pipe(response);
		return;
	}
})
server.listen(80);


//sendFile

//response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
//response.write("<!DOCTYPE html><html><head><link rel=\"icon\" href=\"/logo.ico\" type=\"image/vnd.microsoft.icon\" /></head><body><p>Hello World!</p></body></html>");
//response.end();
