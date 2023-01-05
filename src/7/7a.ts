import { readInput } from '../readInput'
import { sumDirSizes } from './calculateDirSize'

const input = readInput('./src/7/input_7')

console.log('7a: ', sumDirSizes(input, 100000))
