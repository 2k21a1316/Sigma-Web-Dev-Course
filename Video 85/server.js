var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a)

// slugify convert string into slug -> mean string without space
// if you prefer something other than '-' as separator
const b = slugify('some st&&*(^%$$^^&ring', '_')  // some_string
console.log(b)