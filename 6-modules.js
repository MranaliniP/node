//********* */ IN-BUILT MODULES


// const os=require('os')
// //info about current user
// const user=os.userInfo()
// console.log(user)
// //method returns the uptime in seconds
// console.log(`the system uptime is ${os.uptime()} seconds`)
// // const up=os.uptime()
// // console.log(up)
// const currentOs = {
//     name:os.type(), release: os.release(), 
//     totalMem: os.totalmem(), freeMem: os.freemem()
// }
// console.log(currentOs)

//PATH MODULE
// const path=require('path')
// console.log(path.sep)
// const filePath=path.join('./content','subfolder','test.txt')
// console.log(filePath)
// const base=path.basename(filePath)
// console.log(base)

// const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
// console.log(absolute)

//FS MODUE
const { readFileSync, writeFileSync, read}=require('fs')
//the up and below can be written as same
// const fs=require('fs')
// console.log(fs.readFileSync)
// console.log(fs.writeFileSync)
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first,second)
// console.log(first)
// console.log(second)

// with this if there isnt any fie yet created, node will create one and if 
// one is already present node will override it
writeFileSync(
    './content/result-sync.txt',
    `lmao created a file without actually doing the normal procedure : ${first},${second}` 
   // { flag : 'a' }   //idk a syntax error
)

// readFileSync('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
// })