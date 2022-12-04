import { largestSum } from '../largestSum'

const testData = [
  '1000',
  '2000',
  '3000',
  '',
  '4000',
  '',
  '5000',
  '6000',
  '',
  '7000',
  '8000',
  '9000',
  '',
  '10000',
]

describe('sumCalories', () => {
  it('parses the given test data', () => {
    expect(largestSum(testData)).toEqual([24000, 11000, 6000, 4000])
  })
})
