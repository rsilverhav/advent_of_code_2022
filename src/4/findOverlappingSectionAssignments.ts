export function findOverlappingSectionAssignments(inputs: string[]) {
  let counter = 0
  for (const input of inputs) {
    const [range1, range2] = input.split(',').map(parseRange)
    if (
      (range1.min <= range2.min && range1.max >= range2.max) ||
      (range2.min <= range1.min && range2.max >= range1.max)
    ) {
      counter++
    }
  }

  return counter
}

function parseRange(rangeStr: string): Range {
  const split = rangeStr.split('-')
  return {
    min: Number(split[0]),
    max: Number(split[1]),
  }
}

interface Range {
  min: number
  max: number
}
