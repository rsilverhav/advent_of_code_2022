import { readInput } from '../readInput'
import { parseRPSReactive } from './parseRPS'

const inputs = readInput('./src/2/input_2')

console.log(
  '2a: ',
  inputs.reduce((sum, next) => sum + parseRPSReactive(next), 0)
)
