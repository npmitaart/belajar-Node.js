const EventEmitter = require('events');
var url = 'http"//www.giodiomitaart.com';

class Logger extends EventEmitter{
  log(message){
        // send http req
        console.log(message);

        // raise an event
         this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

module.exports = Logger;