export function checkTreeVisibility(inputs: string[]) {
  let nrOfVisible = 0

  for (let y = 1; y < inputs.length - 1; y++) {
    for (let x = 1; x < inputs[y].length - 1; x++) {
      const visibleTrees = checkTreeVisible({
        inputs,
        x,
        y,
        isVisible: (currentHeight, height) => ({
          isVisible: height < currentHeight,
          shouldBreakOnVisible: false,
        }),
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

export function findTreeWithMostVisbleTrees(inputs: string[]) {
  let highestScenicValue = 0
  for (let y = 1; y < inputs.length - 1; y++) {
    for (let x = 1; x < inputs[y].length - 1; x++) {
      const visibleTrees = checkTreeVisible({
        inputs,
        x,
        y,
        isVisible: (currentHeight, height) => {
          return {
            isVisible: true,
            shouldBreakOnVisible: height >= currentHeight,
          }
        },
      })

      let scenicScore = visibleTrees.reduce((acc, next) => acc * next)

      if (scenicScore > highestScenicValue) {
        highestScenicValue = scenicScore
      }
    }
  }

  return highestScenicValue
}

type CheckTreeInputs = {
  inputs: string[]
  x: number
  y: number
  isVisible: (
    currentHeight: number,
    height: number
  ) => { isVisible: boolean; shouldBreakOnVisible: boolean }
}

function checkTreeVisible({ inputs, x, y, isVisible }: CheckTreeInputs): number[] {
  const heightMatrix = inputs.map((input) => input.split('').map((i) => Number(i)))
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
      const res = isVisible(currentHeight, heightMatrix[checkY][checkX])
      if (res.isVisible) {
        visibleTrees[index] += 1
      }
      if (res.shouldBreakOnVisible) {
        break
      }
      checkX = checkX + check.x
      checkY = checkY + check.y
    }
  }

  return visibleTrees
}
