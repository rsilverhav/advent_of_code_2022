import { readInput } from '../readInput'
import { findOverlappingSection } from './findOverlappingSectionAssignments'

const input = readInput('./src/4/input_4')

console.log('4b: ', findOverlappingSection(input))
