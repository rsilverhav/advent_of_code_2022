import { readInput } from '../readInput'
import { findPacketStart } from './findPacketStart'

const input = readInput('./src/6/input_6')

console.log('6a: ', findPacketStart(input[0]))
