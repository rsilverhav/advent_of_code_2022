import { readInput } from '../readInput'
import { stackCrates } from './stackCrates'

const stacks = readInput('./src/5/input_5_stacks')
const moves = readInput('./src/5/input_5_moves')

console.log(
  '5a: ',
  stackCrates(
    stacks.map((s) => s.split(', ')),
    moves
  )
)
