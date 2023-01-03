export function findPacketStart(input: string): number {
  const packetStartLength = 4
  for (let i = packetStartLength; i < input.length; i++) {
    if (new Set(input.slice(i - packetStartLength, i).split('')).size === packetStartLength) {
      return i
    }
  }

  throw new Error('Unable to find start')
}
