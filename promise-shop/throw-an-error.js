const input = process.argv[2]

const parsePromised = new Promise((fulfill, reject) => {
    try {
        fulfill(JSON.parse(input));
    } catch (error) {
        console.log(error.message)
    }
})

parsePromised.then(null, console.log)