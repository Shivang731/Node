****Modular Programming

 **when we break our whole code into smaller codes or functions we call it modular programming** 

**like we use  ./ to use functions and stuff as modules
**

console.log("hello");
const math = require("./math");
console.log("the value is "+ math.add(5,4));

like this how we use it  and the function is exported as 

by using the term  module.exports = add/whatever you want 

ex  function add(a,b){
return a+b;}
module.exports.add = add;

**if we use directly  fs and math it would search in its node directory 
 but we use  ./fs or anything it would search  in the current directory **


Built in packages in Node.js
are 

**exporting**

You can export stuff with in different ways 

**1- Exporting it as an object**

       module.export  = {
       add,sub};
   can name these by

 addfn : add;
 subfn:sub;
  
**2-  Exporting one by one**

     module.export = add;

**3- Arrow fn**

   exports.add = (a,b)  => a+b;
  exports.sub= (a,b)  => a-b;

module.export  = {
       add,sub};



**module.exports**
you can use the module.exports only once not multiple time the mentioned in 1st** while 

**.exports **
you can use  multiple time