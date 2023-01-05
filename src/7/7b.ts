import { readInput } from '../readInput'
import { findSmallestDirToDelete } from './calculateDirSize'

const input = readInput('./src/7/input_7')

console.log('7b: ', findSmallestDirToDelete(input))
