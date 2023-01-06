export function checkTreeVisibility(inputs: string[]) {
  const heightMatrix = inputs.map((input) => input.split('').map((i) => Number(i)))

  let nrOfVisible = 0

  for (let y = 1; y < inputs.length - 1; y++) {
    for (let x = 1; x < inputs[0].length - 1; x++) {
      // Right
      // let checkX = x - 1
      // while (checkX >= 0) {
      //   if (heightMatrix[y][checkX] >= currentHeight) {
      //     currentVisible = false
      //   }
      //   checkX--
      // }

      if (checkTreeVisible({ heightMatrix, x, y })) {
        console.log('Visible @', x, y)
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
  const checkData: { length: number; getHeightValue: (loopValue: number) => number }[] = [
    {
      length: heightMatrix[0].length,
      getHeightValue: (loopValue) => heightMatrix[y][loopValue],
    },
    {
      length: heightMatrix.length,
      getHeightValue: (loopValue) => heightMatrix[loopValue][x],
    },
  ]

  let currentVisible: boolean = true

  for (const check of checkData) {
    currentVisible = true
    for (let loopValue = 0; loopValue < check.length; loopValue++) {
      if (!currentVisible) {
        break
      }

      if (loopValue === x) {
        if (currentVisible) {
          return true
        }

        currentVisible = true
        continue
      }
      if (check.getHeightValue(loopValue) >= currentHeight) {
        currentVisible = false
      }
    }
  }
  return currentVisible
}
