const reduce = (arr, fn, init, index = 0) => {

    if (index >= arr.length) return init;

    const newInit = fn(init, arr[index], index, arr);
    return reduce(arr, fn, newInit, index + 1);
};

module.exports = reduce;