const fs = require('fs')
const data = fs.readFileSync('Day4/data', 'utf8')
const lines = data.split(/\n/)

const printSolution = (work1, work2) => {
  let start = performance.now()
  console.log(`Part 1: ${work1()} Elapsed: ${((performance.now() - start) * 1000).toFixed(3)}µs`)
  start = performance.now()
  console.log(`Part 2: ${work2()} Elapsed: ${((performance.now() - start) * 1000).toFixed(3)}µs`)
}

const regex = /(\d+)-(\d+),(\d+)-(\d+)/
const elfOneStart = [], elfOneEnd = [], elfTwoStart = [], elfTwoEnd = []
let toss
for(let i = 0; i < lines.length; i++) {
  [toss,elfOneStart[i], elfOneEnd[i], elfTwoStart[i], elfTwoEnd[i]] = lines[i].match(regex)
}

const checkValues = (first, second, third, fourth) => {
  if((first <= third && second >= fourth) || (third <= first && fourth >= second)) return true
}

const checkValuesOverlap = (first, second, third, fourth) => {
  if((first <= third && third <= second) || (third <= first && first <= fourth)) return true
}

const solveFirst = (first, second, third, fourth) => {
  let count = 0
  for(let i = 0; i < first.length; i++) {
    if(checkValues(Number(first[i]), Number(second[i]), Number(third[i]), Number(fourth[i]))) count++
  }
  return count
}

const solveSecond = (first, second, third, fourth) => {
  let count = 0
  for(let i = 0; i < first.length; i++) {
    if(checkValuesOverlap(Number(first[i]), Number(second[i]), Number(third[i]), Number(fourth[i]))) count++
  }
  return count
}

printSolution(() => solveFirst(elfOneStart, elfOneEnd, elfTwoStart, elfTwoEnd), () => solveSecond(elfOneStart, elfOneEnd, elfTwoStart, elfTwoEnd))