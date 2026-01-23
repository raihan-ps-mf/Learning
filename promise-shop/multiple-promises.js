const all = (promise1, promise2) => {
    return new Promise((fulfill, reject) => {
        let counter = 0;
        let values = [];
        promise1.then((value) => {
            counter++
            values[0] = value;
            if (counter === 2) {
                fulfill(values)
            }
        })
        promise2.then((value) => {
            counter++
            values[1] = value;
            if (counter === 2) {
                fulfill(values)
            }
        })
    })
}

all(getPromise1(), getPromise2()).then(console.log)