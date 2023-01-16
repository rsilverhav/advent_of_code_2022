import { readInput } from '../readInput'
import { calculateXRegister } from './instructionsParser'

const input = readInput('./src/10/input_10')

console.log(
  '10a: ',
  calculateXRegister(
    input,
    [...new Array(6).keys()].map((i) => 20 + i * 40)
  )
)
