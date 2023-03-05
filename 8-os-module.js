const os = require('os')

const user = os.userInfo()

console.log(user);

uptime= os.uptime()/3600
console.log('The system uptime is ',uptime,'seconds');

const currentOS = {
name:os.type(),
release:os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem(),
}
console.log(currentOS)

