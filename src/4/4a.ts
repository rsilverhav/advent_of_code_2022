import { readInput } from '../readInput'
import { findSectionWithinSection } from './findOverlappingSectionAssignments'

const input = readInput('./src/4/input_4')

console.log('4a: ', findSectionWithinSection(input))
