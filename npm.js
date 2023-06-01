const _= require('lodash')

const num = [1, [2,3,5[5,6]], 7]
const newNum = _.flattenDeep(num)
console.log(newNum)