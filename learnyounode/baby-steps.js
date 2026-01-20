// console.log(process.argv);
let sum = 0;
const length = process.argv.length;
for (let i = 2; i < length; i++) {
    let num = parseInt(process.argv[i]);
    sum += num;
}

console.log(sum);
