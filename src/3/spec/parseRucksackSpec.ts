import { parseRucksack, parseRucksacksBadges } from '../parseRucksack'

describe('parseRucksack', () => {
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
  for (const data of testData) {
    it(`parses the given test data ${data.input}`, () => {
      expect(parseRucksack(data.input)).toBe(data.expected)
    })
  }
})

describe('parseRucksacksBadges', () => {
  const testData = [
    'vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg',
    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw',
  ]
  it(`parses the given test data`, () => {
    expect(parseRucksacksBadges(testData)).toBe(70)
  })
})
