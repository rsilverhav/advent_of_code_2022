export function getTailPositions(inputs: string[], tailLength: number) {
  const movements = parseInputs(inputs)
  let knotPositions: Point[] = [...new Array(tailLength)].map((_) => ({ x: 0, y: 0 }))
  const tailVisited = new Set<string>()

  for (const movement of movements) {
    const delta = directionDeltas[movement.direction]
    for (let distance = 0; distance < movement.distance; distance++) {
      for (let knotIndex = 0; knotIndex < knotPositions.length; knotIndex++) {
        // Update head
        if (knotIndex === 0) {
          knotPositions[knotIndex] = addPoints(knotPositions[knotIndex], delta)
          // Update child knot
        } else {
          const parentKnot = knotPositions[knotIndex - 1]
          const distanceToParent = getDistance(
            knotPositions[knotIndex - 1],
            knotPositions[knotIndex]
          )

          if (distanceToParent >= 2) {
            // Handle X
            const xDiff = parentKnot.x - knotPositions[knotIndex].x
            knotPositions[knotIndex] = addPoints(knotPositions[knotIndex], {
              x: xDiff / (Math.abs(xDiff) || 1),
              y: 0,
            })

            // Handle Y
            const yDiff = parentKnot.y - knotPositions[knotIndex].y
            knotPositions[knotIndex] = addPoints(knotPositions[knotIndex], {
              x: 0,
              y: yDiff / (Math.abs(yDiff) || 1),
            })
          }
        }

        if (knotIndex === knotPositions.length - 1) {
          tailVisited.add(`${knotPositions[knotIndex].x},${knotPositions[knotIndex].y}`)
        }
      }
    }
  }
  return tailVisited.size
}

type Direction = 'R' | 'L' | 'U' | 'D'

interface Movement {
  direction: Direction
  distance: number
}

function parseInputs(inputs: string[]): Movement[] {
  return inputs.map((input) => {
    const split = input.split(' ')
    return {
      direction: split[0] as Direction,
      distance: Number(split[1]),
    }
  })
}

interface Point {
  x: number
  y: number
}

const directionDeltas: Record<Direction, Point> = {
  R: { x: 1, y: 0 },
  L: { x: -1, y: 0 },
  U: { x: 0, y: 1 },
  D: { x: 0, y: -1 },
}

// Point functions
function addPoints(p1: Point, p2: Point): Point {
  return { x: p1.x + p2.x, y: p1.y + p2.y }
}

function getDistance(p1: Point, p2: Point) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
}
