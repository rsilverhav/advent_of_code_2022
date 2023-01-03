import { readInput } from '../readInput'
import { calculateDirSize } from './calculateDirSize'

const input = readInput('./src/7/input_7')

console.log('7b: ', calculateDirSize(input))

