const getShortMessages = (messages) => {
    // SOLUTION GOES HERE
    // console.log(messages);
    return messages.filter((each) => {
        return each.message.length < 50;
    }).map((each) => {
        return each.message;
    });
}
module.exports = getShortMessages