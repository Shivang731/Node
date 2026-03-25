const fs = require("fs");



// //Asyn
// fs.writeFile("./test.txt","Hello Hey", (err) => {});

// // //Sync
//  fs.writeFileSync("./test.txt", "Hello World");



 //Read File


 //Sync
// const result = fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);


//Async
fs.readFile("./contacts.txt","utf-8",(err,result) => {
    if(err){
        console.log("error",err);
    }else {
        console.log(result);
    }
})

