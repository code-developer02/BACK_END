// File System .....

// To use the callback and sync APls:
const fs = require( 'node:fs');

// CALLBACK API....

// Writefile
//fs.writeFile(file, data[, options], callback) .   callback=function

// fs.writeFile("hey.txt","How are you?",function(err){
//     if(err) console.error (err);
//     else console.log("done");
// })


//Append
//fs.appendFile(path, datal, options], callback)

// fs.appendFile("hey.txt"," I am Fine..",function(err){
//     if(err) console.error (err);
//     else console.log("done");
// })


//Rename
//fs.rename(oldPath, newPath, callback)

// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.error(err);
//     else console. log ("done");
//     })

//Copy
//fs.copyFile(src, dest|, mode], callback)

// fs.copyFile("hello.txt", "./copy/chacha.txt", function(err){
//     if(err) console.error(err);
//     else console. log ("done");
// })

//Unlink --> Delete the file
//fs.unlink(path, callback)

// fs.unlink("hello.txt", function(err){
//     if(err) console.error (err);
//     else console. log ("removed");
// })

// Remove Directory
// fs.rmdir(path{,option}, callback)

// fs.rm("./copy",{recursive : true},function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })
