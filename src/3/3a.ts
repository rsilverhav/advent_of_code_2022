import { readInput } from '../readInput'
import { parseRucksack } from './parseRucksack'

const input = readInput('./src/3/input_3')

console.log(
  '3a: ',
  input.reduce((sum, next) => sum + parseRucksack(next), 0)
)
