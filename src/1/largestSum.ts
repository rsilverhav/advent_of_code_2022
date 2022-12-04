export function largestSum(inputs: string[]) {
  const allSums = []
  let currentSum = 0

  for (const input of inputs) {
    if (input !== '') {
      currentSum += Number(input)
    } else {
      allSums.push(currentSum)
      currentSum = 0
    }
  }

  return allSums.sort((a, b) => (a > b ? -1 : 1))
}
