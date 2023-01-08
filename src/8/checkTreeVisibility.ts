export function checkTreeVisibility(inputs: string[]) {
  const heightMatrix = inputs.map((input) => input.split('').map((i) => Number(i)))

  let nrOfVisible = 0

  for (let y = 1; y < inputs.length - 1; y++) {
    for (let x = 1; x < inputs[y].length - 1; x++) {
      const visibleTrees = checkTreeVisible({
        heightMatrix,
        x,
        y,
      })

      if (
        visibleTrees[0] === inputs[y].length - x - 1 ||
        visibleTrees[1] === x ||
        visibleTrees[2] === inputs.length - y - 1 ||
        visibleTrees[3] === y
      ) {
        nrOfVisible += 1
      }
    }
  }

  return (inputs.length - 1) * 4 + nrOfVisible
}

function checkTreeVisible({
  heightMatrix,
  x,
  y,
}: {
  heightMatrix: number[][]
  x: number
  y: number
}): number[] {
  const currentHeight = heightMatrix[y][x]
  const checkData: { x: number; y: number }[] = [
    {
      x: 1,
      y: 0,
    },
    {
      x: -1,
      y: 0,
    },
    {
      x: 0,
      y: 1,
    },
    {
      x: 0,
      y: -1,
    },
  ]

  const visibleTrees = new Array(checkData.length).fill(0)

  for (const [index, check] of checkData.entries()) {
    let checkX = x + check.x
    let checkY = y + check.y

    while (
      checkY >= 0 &&
      checkY < heightMatrix.length &&
      checkX >= 0 &&
      checkX < heightMatrix[y].length
    ) {
      if (heightMatrix[checkY][checkX] < currentHeight) {
        visibleTrees[index] += 1
      }
      checkX = checkX + check.x
      checkY = checkY + check.y
    }
  }

  return visibleTrees
}
