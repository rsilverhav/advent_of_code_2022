export function parseRPSConstant(input: string) {
  return parseRPS(input, (playerChar: string) => convertPlayerInput(playerChar));
}

export function parseRPSReactive(input: string) {
  return parseRPS(input, (playerChar: string, opponentInput: RPSInput) => {
    switch (playerChar) {
      case 'X':
        return getLossInput(opponentInput);
      case 'Y':
        return getDrawInput(opponentInput);
      case 'Z':
        return getWinInput(opponentInput);
      default:
        throw new Error(`Unknown input char ${playerChar}`);
    }
  });
}

enum RPSInput {
  Rock = 1,
  Paper = 2,
  Scissor = 3,
}

const PlayerMoveMap: Record<string, RPSInput> = {
  X: RPSInput.Rock,
  Y: RPSInput.Paper,
  Z: RPSInput.Scissor,
};

const OpponentMoveMap: Record<string, RPSInput> = {
  A: RPSInput.Rock,
  B: RPSInput.Paper,
  C: RPSInput.Scissor,
};

function convertPlayerInput(playerChar: string): RPSInput {
  return PlayerMoveMap[playerChar];
}

function parseRPS(
  input: string,
  getPlayerInput: (playerChar: string, opponentInput: RPSInput) => RPSInput
) {
  const [opponentChar, playerChar] = input.split(' ');

  const opponentInput = convertOpponentInput(opponentChar);
  const playerInput = getPlayerInput(playerChar, opponentInput);

  if (opponentInput === playerInput) {
    return playerInput + 3;
  } else if (opponentInput === getLossInput(playerInput)) {
    return playerInput + 6;
  } else {
    return playerInput;
  }
}

function convertOpponentInput(opponentChar: string): RPSInput {
  return OpponentMoveMap[opponentChar];
}

function getLossInput(originalInput: RPSInput) {
  return originalInput === RPSInput.Rock ? RPSInput.Scissor : originalInput - 1;
}

function getWinInput(originalInput: RPSInput) {
  return originalInput === RPSInput.Scissor ? RPSInput.Rock : originalInput + 1;
}

function getDrawInput(originalInput: RPSInput) {
  return originalInput;
}
