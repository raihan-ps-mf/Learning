module.exports = (word, count = word.length) => {
    return word + '!'.repeat(count);
}