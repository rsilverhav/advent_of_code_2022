import { parseRPSConstant } from '../parseRPS'

const testData: { input: string; expected: number }[] = [
  {
    input: 'A Y',
    expected: 8,
  },
  {
    input: 'B X',
    expected: 1,
  },
  {
    input: 'C Z',
    expected: 6,
  },
]

describe('parseRPSConstant', () => {
  for (const data of testData) {
    it(`parses the given test data ${data.input}`, () => {
      expect(parseRPSConstant(data.input)).toBe(data.expected)
    })
  }
})
