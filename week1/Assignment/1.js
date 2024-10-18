//bruteforcing hash that have first five 00000
const crypto = require('crypto');

function findWithPrefix(prefix) {
  let input = 0; //nounce we have to find  

  while (true) {
    inputStr =  input.toString();
 
    const hash = crypto.createHash('sha256').update(inputStr).digest('hex');

    if (hash.startsWith(prefix)) {
      return { input:inputStr , hash: hash };
    }
    input++
  }
}

const result = findWithPrefix('0000000');

console.log(`${result.input}`)
console.log(`${result.hash}`)