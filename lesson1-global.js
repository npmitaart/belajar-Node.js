// global object

// see the global method that available
// console.log(global);

// global.setTimeout(() => {
//     console.log('In the timeout')   
// }, 3000);

setTimeout(() => {
    console.log('In the timeout')
    clearInterval(int);   
}, 3000);

const int = setInterval(() =>{
    console.log('In the interval')
}, 1000);

// check the dir and file
console.log(__dirname);
console.log(__filename);