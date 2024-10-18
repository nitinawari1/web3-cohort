const crypto = require('crypto');

function findWithPrefix(prefix) {
  let input = 0;

  while (true) {
    inputStr = "100xdevs" + input.toString();
 
    const hash = crypto.createHash('sha256').update(inputStr).digest('hex');

    if (hash.startsWith(prefix)) {
      return { input:inputStr , hash: hash };
    }
    input++
  }
}

const result = findWithPrefix('00000');

console.log(`${result.input}`)
console.log(`${result.hash}`)