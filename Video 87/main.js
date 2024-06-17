const fs = require("fs")//npm init -y always need to inititalise node project
// const fs = require("fs/promises")
 
console.log("starting")
// fs.writeFileSync("harry.txt", "Harry is a good boy")
//js run on asynchronous approach

fs.writeFile("harry2.txt", "Harry is a good boy2", ()=>{
    console.log("done")
    fs.readFile("harry2.txt", (error, data)=>{//shceduled
        console.log(error, data.toString())
    })
    // creates callnack hell if may code like above code ,nesting
})

fs.appendFile("harry.txt", "harryrobo", (e, d)=>{
    console.log(d)
})

console.log("ending")