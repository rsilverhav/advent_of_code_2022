export function calculateXRegister(inputs: string[], cyclesToSample: number[]) {
  const xRegSamples: number[] = []

  parseInstructionSet(inputs, (cycle, registers) => {
    if (cyclesToSample.find((c) => c === cycle + 1)) {
      xRegSamples.push(registers.x * (cycle + 1))
    }
  })

  return xRegSamples.reduce((sum, next) => sum + next, 0)
}

type Dimensions = { width: number; height: number }

export function renderCrt(inputs: string[], dimensions: Dimensions) {
  const screen: boolean[][] = []

  // Init screen
  for (let y = 0; y < dimensions.height; y++) {
    screen[y] = []
    for (let x = 0; x < dimensions.width; x++) {
      screen[y][x] = false
    }
  }

  parseInstructionSet(inputs, (cycle, registers) => {
    const x = cycle % dimensions.width
    const y = Math.floor(cycle / dimensions.width)

    if (x >= registers.x - 1 && x <= registers.x + 1) {
      screen[y][x] = true
    }
  })

  return renderScreen(screen, dimensions)
}

function renderScreen(screen: boolean[][], dimensions: Dimensions) {
  let renderedScreen = ''
  for (let y = 0; y < dimensions.height; y++) {
    for (let x = 0; x < dimensions.width; x++) {
      renderedScreen += screen[y][x] ? '#' : '.'
    }
    renderedScreen += '\n'
  }
  console.log(renderedScreen)
  return renderedScreen
}

function parseInstructionSet(
  inputs: string[],
  midCycleCallback: (cycle: number, registers: { x: number }) => void
) {
  const registers: { x: number } = {
    x: 1,
  }

  let instructionQueue: (Instruction & { arg: string }) | undefined = undefined

  let cycle = 0
  for (const input of inputs) {
    // Start of cycle
    const instructionSplit = input ? input.split(' ') : undefined
    if (!instructionSplit) {
      throw new Error(`Failed to split instruction: ${input}`)
    }
    const [instructionId, arg] = instructionSplit
    const newInstruction = availableInstructions[instructionId]
    if (!newInstruction) {
      throw new Error(`Unable to find instruction ${instructionId}`)
    }
    instructionQueue = { ...newInstruction, arg }

    // During cycle
    const originalCycle = cycle
    for (let i = 0; i < newInstruction.timeToExecute; i++) {
      cycle = originalCycle + i

      midCycleCallback(cycle, registers)
    }

    // End of instruction
    instructionQueue.action(registers, instructionQueue.arg)
    cycle += 1
  }
}

const availableInstructions: Record<string, Instruction> = {
  addx: {
    timeToExecute: 2,
    action: (registers, arg: string) => (registers.x = registers.x + Number(arg)),
  },
  noop: {
    timeToExecute: 1,
    action: () => undefined,
  },
}

interface Instruction {
  action: (registers: { x: number }, arg: string) => void
  timeToExecute: number
}
