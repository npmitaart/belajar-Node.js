// pemanasan
// function sayHello(name){
//     console.log('Hello' + name);
// }

// sayHello(' Giodio')

// // // global object
// console.log(); //global
// setTimeout(); // make a delay
// clearTimeout();
// setInterval();
// clearInterval();

// var message = 'Using global';
// global.console.log(message);

// // // modules
// const log = require('./tutorialMosh-logger');
// // console.log(logger);
// log('message');

// // // module path
// const path = require('path');

// var pathObj = path.parse(__filename);
// console.log(pathObj);
// the output
// root: '/',
//   dir: '/Users/giodiomitaart/belajar-Node.js',
//   base: 'tutorialMosh.js',
//   ext: '.js',
//   name: 'tutorialMosh'

// // // module OS
// const os = require('os');
// var totalMemory = os.totalmem()
// var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);
// console.log('Free Memory: ' + freeMemory);

// // template sting
// // es6: echmascript 6
// // console.log('Total Memory: ${totalMemory}');
// // console.log('Free Memory: ${freeMemory}');

// // // // module fs
// const fs = require('fs');

// // selalu prefer pakai sync (note)

// // baca file directory
// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function(err, files){
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// });

// // // module events
// const EventEmitter = require('events');

// // register a listener
// // emitter.on('messageLogged', function(){
// //     console.log('Listener called')
// // });

// const Logger = require('./tutorialMosh-logger');
// const logger = new Logger();

// // register a listener
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg)
// });

// logger.log('message');

// // // http module
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.write('hello world');
        res.end();
    }
    if(req.url == '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log('New connection');
})

server.listen(3000);

console.log('Listening on port 3000')