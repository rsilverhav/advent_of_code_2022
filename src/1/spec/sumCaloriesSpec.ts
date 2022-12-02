import { sumCalories } from '../sumCalories'

const testData = []

describe('sumCalories', () => {
  it('parses the given test data', () => {
    expect(sumCalories(testData)).toBe(0)
  })
})
