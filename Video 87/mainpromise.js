import fs from "fs/promises"
//promise to avoid callback hell
let a = await fs.readFile("harry.txt")
// no need of asyncs for await ,can do directly await ->wait for
let b = await fs.appendFile("harry.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)