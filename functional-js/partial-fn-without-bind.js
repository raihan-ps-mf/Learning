const logger = (namespace) => {
    return (...args) => {
        args.unshift(namespace);
        console.log.apply(console, args);
    };
}

module.exports = logger