const net = require('net')
const port = process.argv[2];

const server = net.createServer((socket) => {

    const now = new Date()

    const year = now.getFullYear()
    const month = ('0' + (now.getMonth() + 1)).slice(-2)
    const day = ('0' + now.getDate()).slice(-2)

    const hours = ('0' + now.getHours()).slice(-2)
    const minutes = ('0' + now.getMinutes()).slice(-2)

    const timeStamp = `${year}-${month}-${day} ${hours}:${minutes}\n`
    socket.end(timeStamp);
})

server.listen(port);