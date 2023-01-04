import { readInput } from '../readInput'
import { sumDirsSmallerThan } from './calculateDirSize'

const input = readInput('./src/7/input_7')

console.log('7a: ', sumDirsSmallerThan(input, 100000))
