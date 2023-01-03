import { readInput } from '../readInput'
import { stackCratesReversed } from './stackCrates'

const stacks = readInput('./src/5/input_5_stacks')
const moves = readInput('./src/5/input_5_moves')

console.log(
  '5a: ',
  stackCratesReversed(
    stacks.map((s) => s.split(', ')),
    moves
  )
)
