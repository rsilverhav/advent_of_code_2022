import { findPacketStart } from '../findPacketStart'

const testData: { input: string; expected: number }[] = [
  {
    input: 'mjqjpqmgbljsphdztnvjfqwrcgsmlb',
    expected: 7,
  },
  {
    input: 'bvwbjplbgvbhsrlpgdmjqwftvncz',
    expected: 5,
  },
  {
    input: 'nppdvjthqldpwncqszvftbrmjlhg',
    expected: 6,
  },
  {
    input: 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg',
    expected: 10,
  },
  {
    input: 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw',
    expected: 11,
  },
]

describe('findPacketStart', () => {
  for (const data of testData) {
    it(`parses the given test data ${data.input}`, () => {
      expect(findPacketStart(data.input, 4)).toBe(data.expected)
    })
  }
})
