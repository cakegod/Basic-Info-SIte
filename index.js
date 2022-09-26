const http = require('http');
const fs = require('fs');

const server = http
	.createServer((req, res) => {
		let filename;
		if (req.url === '/') {
			filename = 'index';
		} else filename = req.url.replace('/', '');
		fs.readFile(filename + '.html', (err, data) => {
			if (err) {
				res.writeHead(404, { 'Content-Type': 'text/html' });
				return res.end('404 Not Found');
			}
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end();
		});
	})
	.listen(8080, 'localhost');
