const countWords = (inputWords) => {
    return inputWords.reduce((output, word) => {
        output[word] = (output[word] || 0) + 1;
        return output;
    }, {})
}

module.exports = countWords;