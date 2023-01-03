export function stackCrates(stacks: string[][], moves: string[]) {
  const { stacks: parsedStacks, moves: parsedMoves } = parseStartState(stacks, moves)

  for (const move of parsedMoves) {
    const values = parsedStacks[move.from].splice(-move.amount)
    parsedStacks[move.to].push(...values.reverse())
  }

  return parsedStacks.map((s) => s[s.length - 1]).join('')
}

interface Move {
  from: number
  to: number
  amount: number
}

function parseStartState(
  stacks: string[][],
  moves: string[]
): { stacks: string[][]; moves: Move[] } {
  const size = stacks[0].length
  const parsedStacks: string[][] = new Array(size)

  for (const stack of stacks) {
    for (let i = 0; i < stack.length; i++) {
      const value = stack[i]
      if (value !== ' ') {
        if (!parsedStacks[i]) {
          parsedStacks[i] = []
        }
        parsedStacks[i].push(value)
      }
    }
  }

  return {
    moves: moves.map((m) => {
      const regexRes = /move (\d+) from (\d+) to (\d+)/.exec(m)
      if (!regexRes) {
        throw new Error('Moves regex failed')
      }
      return {
        amount: Number(regexRes[1]),
        // index
        from: Number(regexRes[2]) - 1,
        // index
        to: Number(regexRes[3]) - 1,
      }
    }),
    stacks: parsedStacks.map((s) => s.reverse()),
  }
}
