export function parseRucksack(input: string) {
  if (input.length % 2 !== 0) {
    throw new Error('Uneaven input length')
  }

  const part1 = input.substring(0, input.length / 2).split('')
  const part2 = input.substring(input.length / 2, input.length).split('')

  const commonItem = part1.find((p1) => part2.find((p2) => p1 === p2))

  if (typeof commonItem === 'undefined') {
    throw new Error('No common item in compartments')
  }

  const value = commonItem.charCodeAt(0) - (/[A-Z]/.test(commonItem) ? 38 : 96)
  return value
}
