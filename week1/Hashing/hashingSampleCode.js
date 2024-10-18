const crypto = require('crypto'); //importing cryptography libarary from node.js

const data  = '100xdevs' ;  // string that we have to hash 

const hash = crypto.createHash('MD5') // type of hashing function like sha256 hash5 
             .update(data) // our input 
             .digest('hex') // type  of output 
console.log(hash)