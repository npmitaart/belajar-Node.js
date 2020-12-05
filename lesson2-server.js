const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// create a server
// req -> url
// res -> objek untuk kasih kembali ke user/browser
const server = http.createServer((req, res) => {
    // console.log('request made');
    // console.log(req);

    // cek url and method
    // console.log(req.url, req.method);

    // // set header content type
    // res.setHeader('Content-Type', 'text/html');
    // // kalau mau ganti html tinggal text/html
    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<p>hello world</p>');
    // res.end();

    // lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });

    greet();

    // ini yang versi benar, ngambil html dari folder terpisah
    res.setHeader('Content-Type', 'text/html');

    let path = './lesson2-views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            // set status code
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
             // set status code
             res.statusCode = 200;
            break;

        // buat redirect /about-me to about
         case '/about-me':
            path += 'about.html';
             // set status code to 301
             res.statusCode = 301;
             res.setHeader('Location', '/about');
             res.end();
            break;   

        default:
            path += 'error404.html';
             // set status code to error
             res.statusCode = 404;
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            req.end();
        }else{
            res.write(data);
            res.end();
            // short way kalau cuma 1 parameter
            // res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});

// kalau mau ada perubahan harus restart file

// yang baik harus terpisah file htmlnya, supaya rapi