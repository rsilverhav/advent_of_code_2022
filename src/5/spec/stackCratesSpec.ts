import { stackCratesRetainOrder, stackCratesReversed } from '../stackCrates'

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

describe('stackCratesReversed', () => {
  it('parses the given test data', () => {
    expect(stackCratesReversed(startStacks, moves)).toBe('CMZ')
  })
})

describe('stackCratesRetainOrder', () => {
  it('parses the given test data', () => {
    expect(stackCratesRetainOrder(startStacks, moves)).toBe('MCD')
  })
})
