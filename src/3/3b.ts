import { readInput } from '../readInput'
import { parseRucksacksBadges } from './parseRucksack'

const input = readInput('./src/3/input_3')

console.log('3b: ', parseRucksacksBadges(input))
