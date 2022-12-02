const fs = require('fs')
const data = fs.readFileSync('Day2/data', 'utf8')
const lines = data.split(/\n/)

const start = performance.now()

let score = 0
for(let line of lines) {
  switch(line[2]) {
    case 'X':
      score += 1
      if(line[0] === 'A') score += 3
      if(line[0] === 'C') score += 6
      break
    case 'Y':
      score += 2
      if(line[0] === 'A') score += 6
      if(line[0] === 'B') score += 3
      break
    case 'Z':
      score += 3
      if(line[0] === 'B') score += 6
      if(line[0] === 'C') score += 3
      break
  }
}

console.log('Part 1: ', score, ' Elapsed: ', performance.now() - start)
const start2 = performance.now()

score = 0
for(let line of lines) {
  switch(line[2]) {
    case 'X':
      if(line[0] === 'A') score += 3
      if(line[0] === 'B') score += 1
      if(line[0] === 'C') score += 2
      break
    case 'Y':
      score += 3
      if(line[0] === 'A') score += 1
      if(line[0] === 'B') score += 2
      if(line[0] === 'C') score += 3
      break
    case 'Z':
      score += 6
      if(line[0] === 'A') score += 2
      if(line[0] === 'B') score += 3
      if(line[0] === 'C') score += 1
      break
  }
}

console.log('Part 2: ', score, ' Elapsed: ', performance.now() - start2)
