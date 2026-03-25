*
******you can do anything you want with files with Node js mkdir  ,copy,remove anything but you cant do these stuff with ******
*****1-Read
    2-write
     3-append******




fs module file system 

**its a built in function**


****the code****

const fs = require("fs");

**1- Write File****

//For sync
fs.writeFileSync("./test.txt","Hello World");

//Async

fs.writeFile("./test.txt","Hello hey", (err)  => {});


****we use ./  to tell the computer make it in the current directory
along with that

**Async**

has a error callback to **(err)=>{} **** unlike Sync it mandatory for it be here 

**Asyn writefile  would overrite the synchronous one


**2-Read File****

**Coming too utf-8 it just mean read the file and consider as string


**


**Sync**

const result = fs.readFileSync("./contacts.txt","utf-8");
console.log(result);

it just basic read file **contacts.txt**  and it is in the **current directory (./)****


****async****

its mandatory to call a **callback function**** after calling something async or else **it wont work****


fs.readFile("./contacts.txt","utf-8",(err,result) => {
if(err){
console.log("error",err);
}else {
console.log(result);
}
});

**3-append**






onto [[Architecture(How Node JS works )]]

****