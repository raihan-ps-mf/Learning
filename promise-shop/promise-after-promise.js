first().then((secretValue) => {
    return second(secretValue)
}).then(console.log);