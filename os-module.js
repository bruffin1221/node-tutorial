const os = require('os')
//user info
const user = os.userInfo()
console.log(user)

//returns uptime in seconds
console.log(`${os.uptime()} seconds`)

//os info

const currentOs={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(), 
    freeMem: os.freemem()
}
console.log(currentOs)
