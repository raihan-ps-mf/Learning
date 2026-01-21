const inputs = []
let output = '';

for (let i = 2; process.argv[i] !== undefined; i++) {
    inputs.push(process.argv[i]);
}

const result = inputs.map(input => {
    output += input[0];
})

console.log(`[${inputs}] becomes "${output}"`);