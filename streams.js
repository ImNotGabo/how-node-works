const fs = require('node:fs');
const server = require('node:http').createServer();

server.on('request', (req, res) => {
	// Solution 1 | Worst perfomance
	/* fs.readFile('test-file.txt', (err, data) => {
		if (err) console.log(err);
		res.end(data);
	}); */
	// Solution 2: Streams
});

server.listen(8000, '127.0.0.1', () => {
	console.log('Listening...');
});
