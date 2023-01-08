export function parseRucksack(input: string) {
  return parseRucksackCollections(() => {
    if (input.length % 2 !== 0) {
      throw new Error('Uneaven input length')
    }

    const part1 = input.substring(0, input.length / 2)
    const part2 = input.substring(input.length / 2, input.length)

    return [part1, part2]
  })
}

export function parseRucksacksBadges(inputs: string[]) {
  if (inputs.length % 3 !== 0) {
    throw new Error('Incorrect input l')
  }

  const tempInputs = [...inputs]
  let sum = 0
  while (tempInputs.length > 0) {
    const currentInputs = tempInputs.splice(0, 3)
    sum += parseRucksackCollections(() => currentInputs)
  }
  return sum
}

function parseRucksackCollections(getItemCollection: () => string[]) {
  const collections = getItemCollection()

  const commonItem = getCommonItem(collections)

  if (typeof commonItem === 'undefined') {
    throw new Error('No common item in compartments')
  }

  // Different offset based on upper or lower case ASCII
  const value = commonItem.charCodeAt(0) - (/[A-Z]/.test(commonItem) ? 38 : 96)
  return value
}

function getCommonItem(collections: string[]): string | undefined {
  const allUniqueItems = new Set<string>(
    collections.reduce((acc, next) => acc + next, '').split('')
  )

  for (const [item] of allUniqueItems.entries()) {
    let collectionsWithItem = collections.reduce(
      (sum, next) => sum + (next.includes(item) ? 1 : 0),
      0
    )
    if (collectionsWithItem === collections.length) {
      return item
    }
  }

  return undefined
}
