// call file from people.js
const callPeople = require('./lesson1-people');
// bisa juga seperti ini
const {people, ages} = require('./lesson1-people');

// the output will be empty object
// tidak langsung beri akses file yang ada di people
console.log(callPeople);

// bagaimana caranya? cek dokumentasi di people.js

// sudah ditambah ages. gimana cara print terpisah?
console.log(callPeople.people, callPeople.ages);
console.log(people, ages);

const os = require('os');
console.log(os.platform(), os.homedir());