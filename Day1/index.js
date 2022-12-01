const fs = require('fs')
const data = fs.readFileSync('Day1/data', 'utf8')
const lines = data.split(/\n/)
const elves = [0]

let currentElf = 0
for(let line of lines) {
  if(!line) {
    currentElf++
    elves[currentElf] = 0
  } else {
    elves[currentElf] += Number(line)
  }
}

elves.sort((a, b) => b - a)

console.log('Answer 1: ', elves[0])
console.log('Answer 2: ', elves.slice(0,3).reduce((acc, val) => acc + val))
