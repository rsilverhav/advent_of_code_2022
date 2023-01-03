import { stackCrates } from '../stackCrates'

const startStacks = [
  [' ', 'D', ' '],
  ['N', 'C', ' '],
  ['Z', 'M', 'P'],
]

const moves = [
  'move 1 from 2 to 1',
  'move 3 from 1 to 3',
  'move 2 from 2 to 1',
  'move 1 from 1 to 2',
]

describe('stackCrates', () => {
  it('parses the given test data', () => {
    expect(stackCrates(startStacks, moves)).toBe('CMZ')
  })
})
