enum RPSInput {
  Rock = 1,
  Paper = 2,
  Scissor = 3,
}

function convertOpponentInput(opponentChar: string): RPSInput {
  return opponentChar.charCodeAt(0) - 64
}

function convertPlayerInput(playerChar: string): RPSInput {
  return playerChar.charCodeAt(0) - 87
}

function parseRPS(
  input: string,
  getPlayerInput: (playerChar: string, opponentInput: RPSInput) => RPSInput
) {
  const [opponentChar, playerChar] = input.split(' ')

  const opponentInput = convertOpponentInput(opponentChar)
  const playerInput = getPlayerInput(playerChar, opponentInput)

  if (opponentInput === playerInput) {
    return playerInput + 3
  } else if (opponentInput === (playerInput === 1 ? RPSInput.Scissor : playerInput - 1)) {
    return playerInput + 6
  } else {
    return playerInput
  }
}

export function parseRPSConstant(input: string) {
  return parseRPS(input, (playerChar: string) => convertPlayerInput(playerChar))
}

export function parseRPSReactive(input: string) {
  return parseRPS(input, (playerChar: string, opponentInput: RPSInput) => {
    // TODO: impl
    console.log(opponentInput)
    return convertPlayerInput(playerChar)
  })
}
