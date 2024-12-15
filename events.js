const EventEmitter = require('node:events');
const http = require('node:http');

const eventEmitter = new EventEmitter();

// If you want to use this pattern irl, then you need to use classes
class Sales extends EventEmitter {
	constructor() {
		super();
	}
}

const myEmitter = new Sales();

eventEmitter.on('newSale', () => {
	console.log('There was a new sale');
});

eventEmitter.on('newSale', () => {
	console.log('Costumer name: Gabriel');
});

eventEmitter.on('newSale', (stock) => {
	console.log(`There are now ${stock} items left in stock`);
});

eventEmitter.emit('newSale', 9);
// myEmitter.emit('newSale');

///////////////////////////////////////
const server = http.createServer();
server.on('request', (req, res) => {
	console.log(`Request received`);
	console.log(req.url);
	res.end('Request received');
});

server.on('request', (req, res) => {
	console.log('Another request ✅');
});

server.on('close', () => {
	console.log('Server closed');
});

server.listen(8000, '127.0.0.1', () => {
	console.log('Waiting for request...');
});
