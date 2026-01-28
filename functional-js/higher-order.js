const repeat = (operation, num) => {
    while (num !== 0) {
        num--;
        operation();
    }
}

// Do not remove the line below
module.exports = repeat