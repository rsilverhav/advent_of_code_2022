export function findPacketStart(input: string, packetStartLength: number): number {
  for (let i = packetStartLength; i < input.length; i++) {
    if (new Set(input.slice(i - packetStartLength, i).split('')).size === packetStartLength) {
      return i
    }
  }

  throw new Error('Unable to find start')
}
