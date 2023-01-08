export function checkTreeVisibility(inputs: string[]) {
  const heightMatrix = inputs.map((input) => input.split('').map((i) => Number(i)))

  let nrOfVisible = 0

  for (let y = 1; y < inputs.length - 1; y++) {
    for (let x = 1; x < inputs[y].length - 1; x++) {
      if (
        checkTreeVisible({
          heightMatrix,
          x,
          y,
        })
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
}): boolean {
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

  let currentVisible: boolean = true

  for (const check of checkData) {
    currentVisible = true

    let checkX = x + check.x
    let checkY = y + check.y

    while (
      checkY >= 0 &&
      checkY < heightMatrix.length &&
      checkX >= 0 &&
      checkX < heightMatrix[y].length &&
      currentVisible
    ) {
      if (heightMatrix[checkY][checkX] >= currentHeight) {
        currentVisible = false
      }
      checkX = checkX + check.x
      checkY = checkY + check.y
    }
    if (currentVisible) {
      return true
    }
  }
  return currentVisible
}
