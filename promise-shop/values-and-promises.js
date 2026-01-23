const attachTitle = (value) => {
    return `DR. ${value}`;
}

const promise = new Promise((fulfill, reject) => {
    fulfill('MANHATTAN');
})

promise.then(attachTitle).then(console.log);