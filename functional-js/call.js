const duckCount = (...args) => {
    return args.filter((arg) => Object.prototype.hasOwnProperty.call(arg, 'quack')).length;
}

module.exports = duckCount;