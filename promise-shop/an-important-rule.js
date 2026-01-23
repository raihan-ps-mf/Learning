const alwaysThrow = () => {
    throw new Error("OH NOES");
}

const iterate = (input) => {
    console.log(input)
    return input + 1;
}

Promise.resolve(1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrow)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch((error) => {
        console.log(error.message)
    })
