// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)


import harry from "./mymodule.js"//this is the example of ->module import asynchronously ,like python,import is es6 ka module
console.log(harry)

// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
// node js wrap our code of module in this function 
  
//   });

const a = require("./mymodule2.js")//require import the module synchronously,called commonjs
//but module import the module asynchronously

//npm init -y to avoid asked ques
// "type":"module",

console.log(a, __dirname, __filename)