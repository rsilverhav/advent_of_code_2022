import { parseRucksack } from '../parseRucksack'

const testData: { input: string; expected: number }[] = [
  {
    input: 'vJrwpWtwJgWrhcsFMMfFFhFp',
    expected: 16,
  },
  {
    input: 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    expected: 38,
  },
  {
    input: 'PmmdzqPrVvPwwTWBwg',
    expected: 42,
  },
  {
    input: 'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    expected: 22,
  },
  {
    input: 'ttgJtRGJQctTZtZT',
    expected: 20,
  },
  {
    input: 'CrZsJsPPZsGzwwsLwLmpwMDw',
    expected: 19,
  },
]

describe('parseRucksack', () => {
  for (const data of testData) {
    it(`parses the given test data ${data.input}`, () => {
      expect(parseRucksack(data.input)).toBe(data.expected)
    })
  }
})
