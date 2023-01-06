import { checkTreeVisibility } from '../checkTreeVisibility'

const testData = ['30373', '25512', '65332', '33549', '35390']

describe('checkTreeVisibility', () => {
  it('parses the given test data', () => {
    expect(checkTreeVisibility(testData)).toBe(21)
  })
})
