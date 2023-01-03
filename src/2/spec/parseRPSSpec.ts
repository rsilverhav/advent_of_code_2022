import { parseRPSConstant, parseRPSReactive } from '../parseRPS'

describe('parseRPSConstant', () => {
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
  for (const data of testData) {
    it(`parses the given test data ${data.input}`, () => {
      expect(parseRPSConstant(data.input)).toBe(data.expected)
    })
  }
})

describe('parseRPSReactive', () => {
  const testData: { input: string; expected: number }[] = [
    {
      input: 'A Y',
      expected: 4,
    },
    {
      input: 'B X',
      expected: 1,
    },
    {
      input: 'C Z',
      expected: 7,
    },
  ]
  for (const data of testData) {
    it(`parses the given test data ${data.input}`, () => {
      expect(parseRPSReactive(data.input)).toBe(data.expected)
    })
  }
})
