const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

// No event loop
setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('test-file.txt', () => {
	console.log('I/O finished');
	console.log('-------------------------');

	// Event loop
	setTimeout(() => console.log('Timer 2 finished'), 0);
	setTimeout(() => console.log('Timer 3 finished'), 3000);
	setImmediate(() => console.log('Immediate 2 finished'));

	process.nextTick(() => console.log('Process.nextTick'));

	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>
		console.log(Date.now() - start, 'Password encrypted')
	);
	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>
		console.log(Date.now() - start, 'Password encrypted')
	);
	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>
		console.log(Date.now() - start, 'Password encrypted')
	);
	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>
		console.log(Date.now() - start, 'Password encrypted')
	);
	crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>
		console.log(Date.now() - start, 'Password encrypted')
	);
});

console.log('Hello from the top-level code');
/* 
How is setImmediate() different from setTimeout(() => {}, 0) (passing a 0ms timeout), and from process.nextTick() and Promise.then()?

A function passed to process.nextTick() is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before setTimeout and setImmediate.

A setTimeout() callback with a 0ms delay is very similar to setImmediate(). The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.

A process.nextTick callback is added to process.nextTick queue. A Promise.then() callback is added to promises microtask queue. A setTimeout, setImmediate callback is added to macrotask queue.

Event loop executes tasks in process.nextTick queue first, and then executes promises microtask queue, and then executes macrotask queue.
*/
