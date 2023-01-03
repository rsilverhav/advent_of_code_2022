import { findOverlappingSectionAssignments } from '../findOverlappingSectionAssignments'

const testData = ['2-4,6-8', '2-3,4-5', '5-7,7-9', '2-8,3-7', '6-6,4-6', '2-6,4-8']

describe('findOverlappingSectionAssignments', () => {
  it('parses the given test data', () => {
    expect(findOverlappingSectionAssignments(testData)).toBe(2)
  })
})
