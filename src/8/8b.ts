import { readInput } from '../readInput'
import { findTreeWithMostVisbleTrees } from './checkTreeVisibility'

const input = readInput('./src/8/input_8')

console.log('8b: ', findTreeWithMostVisbleTrees(input))
