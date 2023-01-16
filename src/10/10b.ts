import { readInput } from '../readInput'
import { instructionsParser } from './instructionsParser'

const input = readInput('./src/10/input_10')

console.log('10b: ', instructionsParser(input))

