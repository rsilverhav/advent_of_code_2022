import { readInput } from '../readInput'
import { findOverlappingSectionAssignments } from './findOverlappingSectionAssignments'

const input = readInput('./src/4/input_4')

console.log('4b: ', findOverlappingSectionAssignments(input))

