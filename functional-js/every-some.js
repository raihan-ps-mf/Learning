const checkUsersValid = (goodUsers) => {
    return (submittedUsers) => {
        return submittedUsers.every((user) => {
            return goodUsers.some((goodUser) => goodUser.id === user.id)
        })
    };
}

module.exports = checkUsersValid