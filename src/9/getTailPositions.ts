export function getTailPositions(inputs: string[]) {
  return simluateRopeMovements(parseInputs(inputs)).uniqueTailPositions
}

enum Direction {
  Right = 'R',
  Left = 'L',
  Up = 'U',
  Down = 'D',
}

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
  [Direction.Right]: { x: 1, y: 0 },
  [Direction.Left]: { x: -1, y: 0 },
  [Direction.Up]: { x: 0, y: 1 },
  [Direction.Down]: { x: 0, y: -1 },
}

// DEBUG FUNCTION
// function printMap(size: number, positions: { position: Point; char: string }[]) {
//   console.log('\n\n')
//   const rows: string[] = []
//
//   for (let y = 0; y < size; y++) {
//     let str = ''
//     for (let x = 0; x < size; x++) {
//       let position = positions.find((p) => x === p.position.x && y === p.position.y)
//       if (position) {
//         str += position.char
//       } else {
//         str += '.'
//       }
//     }
//     rows.push(str)
//   }
//   console.log(rows.reverse().join('\n'))
// }

// Point functions
function addPoints(p1: Point, p2: Point): Point {
  return { x: p1.x + p2.x, y: p1.y + p2.y }
}

function getDistance(p1: Point, p2: Point) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
}

function simluateRopeMovements(movements: Movement[]): { uniqueTailPositions: number } {
  let headPosition: Point = { x: 0, y: 0 }
  let tailPosition: Point = { x: 0, y: 0 }
  // printMap(6, [{ position: headPosition, char: 'H' }])

  const tailVisited = new Set<string>()
  tailVisited.add(`${tailPosition.x},${tailPosition.y}`)

  for (const movement of movements) {
    const delta = directionDeltas[movement.direction]
    for (let i = 0; i < movement.distance; i++) {
      // Update head
      headPosition = addPoints(headPosition, delta)

      // Update tail if needed
      if (getDistance(headPosition, tailPosition) >= 2) {
        tailPosition = addPoints(headPosition, { x: -delta.x, y: -delta.y })
        tailVisited.add(`${tailPosition.x},${tailPosition.y}`)
      }
      // printMap(6, [
      //   { position: headPosition, char: 'H' },
      //   { position: tailPosition, char: 'T' },
      // ])
    }
  }
  return {
    uniqueTailPositions: tailVisited.size,
  }
}
