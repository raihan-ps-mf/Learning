module.exports = function average(...args) {
    let sum = 0;
    let count = 0;
    args.forEach(function (value) {
        sum += value;
        count++;
    });

    return sum / count;
}