// init module
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog1.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog-stream.txt');

// readStream.on('data', (chunk) =>{
//     console.log('----NEW CHUNK----');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
    
// });

// piping
readStream.pipe(writeStream);