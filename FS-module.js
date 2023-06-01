// const{readFileSync, writeFileSync} = require('fs')
// const first = readFileSync('./folder/test.js', 'utf8')
// const second = readFileSync('./folder/subfolder/text.js', 'utf8')
// console.log(first, second)
// writeFileSync('./folder/result', `${first} ${second}`)

const{readFile, writeFile} = require('fs')
readFile('./folder/result.js','utf8',(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})