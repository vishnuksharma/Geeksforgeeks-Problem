const buf = require('buffer').Buffer;
let bufferOne = buf.from('This is a buffer example.');
console.log(bufferOne);

// Output: <Buffer 54 68 69 73 20 69 73 20 61 20 62 75 66 66 65 72 20 65 78 61 6d 70 6c 65 2e>

let json = JSON.stringify(bufferOne);
console.log(json);
console.log(bufferOne.toJSON());
console.log(bufferOne.toString('utf8'));