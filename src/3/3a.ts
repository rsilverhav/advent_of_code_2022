import { readInput } from '../readInput'
import { parseRucksack } from './parseRucksack'

const input = readInput('./src/3/input_3')

console.log(
  '3a: ',
  input.reduce((acc, next) => acc + parseRucksack(next), 0)
)
