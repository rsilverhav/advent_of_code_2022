export function calculateDirSize(inputs: string[]) {
  const currentDir: string[] = []
  const allDirs: Dir[] = []

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i][0] === '$') {
      const [commandStr, commandArg] = inputs[i].slice(2).split(' ')
      const command = commands[commandStr]
      if (!command) {
        throw new Error(`Missing command definition for ${commandStr}`)
      }
      command({ currentDir, commandArg, inputs, allDirs })
    }
  }
}

const commands: Record<
  string,
  (args: {
    commandArg: string
    inputs: string[]
    currentDir: string[]
    allDirs: Dir[] = []
  }) => void
> = {
  cd: ({ currentDir, commandArg, allDirs }) => {
    currentDir.push(commandArg)
    const path = currentDir.join('/')
    if (!allDirs.find((dir) => dir.name === path)) {
      allDirs.push({ name: path, files: [], children: [] })
    }
  },
  ls: ({ currentDir, commandArg }) => currentDir.push(commandArg),
}

interface Dir {
  name: string
  files: { name: string; size: number }[]
  children: Dir[]
}
