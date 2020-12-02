// import the module first!!!
const fs = require('fs');

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) =>{
//     if(err){
//         console.log(err);
//     }

//     // console.log(data);
//     // use this
//     console.log(data.toString());
// });

// // ini akan dibaca duluan karena dia baca semua ddulu baru proses files
// console.log('Last line');

// writing files
// parameter 1 utk lokasi, parameter 2 teks, parameter 3 semacam kasih info
// fs.writeFile('./docs/blog1.txt', 'Hello World', () =>{
//     console.log('File was written');
// });

// directory files
// buat dir
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err)  =>{
//         if(err){
//             console.log(err);
//         }
    
//         console.log('Folder created');
    
//         // kalau kita buat lagi yang sama maka akan error. jadi buat validasi untuk cek
//     });
// }else{
//     fs.rmdir('./assets', (err) =>{
//         if(err){
//             console.log(err);
//         }

//         console.log('Folder deleted');
//     });
// }

// fs.mkdir('./assets', (err)  =>{
//     if(err){
//         console.log(err);
//     }

//     console.log('Folder created');

//     // kalau kita buat lagi yang sama maka akan error. jadi buat validasi untuk cek
// });

// deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) =>{
        console.log(err);
    })

    console.log('File deleted');
}
