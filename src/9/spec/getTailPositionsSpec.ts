import { getTailPositions } from '../getTailPositions'

describe('getTailPositions', () => {
  it('simulate tail with length 2', () => {
    const testData = ['R 4', 'U 4', 'L 3', 'D 1', 'R 4', 'D 1', 'L 5', 'R 2']
    expect(getTailPositions(testData, 2)).toBe(13)
  })

  it('simulate tail with length 9', () => {
    const testData = ['R 5', 'U 8', 'L 8', 'D 3', 'R 17', 'D 10', 'L 25', 'U 20']
    expect(getTailPositions(testData, 10)).toBe(36)
  })
})
