import { readInput } from '../readInput'
import { instructionsParser } from './instructionsParser'

const input = readInput('./src/10/input_10')

console.log(
  '10a: ',
  instructionsParser(
    input,
    [...new Array(6).keys()].map((i) => 20 + i * 40)
  )
)
