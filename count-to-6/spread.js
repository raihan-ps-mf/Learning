const numbers = process.argv.slice(2);
const min = Math.min(...numbers);

// console.log(numbers);
// console.log(min);

console.log(`The minimum of [${numbers}] is ${min}`)