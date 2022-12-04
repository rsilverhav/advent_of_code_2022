import { readInput } from '../readInput'
import { largestSum } from './largestSum'

const input = readInput('./src/1/input_1')

console.log(
  '1b: ',
  largestSum(input)
    .slice(0, 3)
    .reduce((sum, next) => (sum += next), 0)
)
