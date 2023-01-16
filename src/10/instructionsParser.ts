export function instructionsParser(inputs: string[], cyclesToSample: number[]) {
  const registers: { x: number } = {
    x: 1,
  }

  const xRegSamples: number[] = []

  let instructionQueue: (Instruction & { arg: string }) | undefined = undefined

  let cycle = 0
  for (const input of inputs) {
    cycle += 1
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
      if (cyclesToSample.find((c) => c === cycle)) {
        xRegSamples.push(registers.x * cycle)
      }
    }

    // End of instruction
    instructionQueue.action(registers, instructionQueue.arg)
  }
  return xRegSamples.reduce((sum, next) => sum + next, 0)
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
