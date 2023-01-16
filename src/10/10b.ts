import { readInput } from '../readInput'
import { renderCrt } from './instructionsParser'

const input = readInput('./src/10/input_10')

console.log('10b:\n' + renderCrt(input, { width: 40, height: 6 }))
