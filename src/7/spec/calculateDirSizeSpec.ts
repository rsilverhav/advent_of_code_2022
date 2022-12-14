import { findSmallestDirToDelete, sumDirSizes } from '../calculateDirSize'

const testData = [
  '$ cd /',
  '$ ls',
  'dir a',
  '14848514 b.txt',
  '8504156 c.dat',
  'dir d',
  '$ cd a',
  '$ ls',
  'dir e',
  '29116 f',
  '2557 g',
  '62596 h.lst',
  '$ cd e',
  '$ ls',
  '584 i',
  '$ cd ..',
  '$ cd ..',
  '$ cd d',
  '$ ls',
  '4060174 j',
  '8033020 d.log',
  '5626152 d.ext',
  '7214296 k',
]

describe('sumDirSizes', () => {
  it('parses the given test data', () => {
    expect(sumDirSizes(testData, 100000)).toBe(95437)
  })
})

describe('sumDirSizes', () => {
  it('parses the given test data', () => {
    expect(findSmallestDirToDelete(testData)).toBe(24933642)
  })
})
