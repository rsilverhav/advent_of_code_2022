export function sumDirsSmallerThan(inputs: string[], limit: number) {
  const result = calculateDirSizes(inputs)
  return Object.entries(result).reduce((sum, next) => (next[1] <= limit ? sum + next[1] : sum), 0)
}

function calculateDirSizes(inputs: string[]) {
  const dirs: Dir[] = [{ name: '', parent: undefined, children: [], files: [] }]
  let currentDir: Dir = dirs[0]

  for (let i = 0; i < inputs.length; i++) {
    if (isCommand(inputs[i])) {
      // Get command info
      const [commandStr, commandArg] = inputs[i].slice(2).split(' ')

      // Get command output
      const commandOutputs = []

      for (let outputIndex = i + 1; outputIndex < inputs.length; outputIndex++) {
        if (isCommand(inputs[outputIndex])) {
          i = outputIndex - 1
          break
        }
        commandOutputs.push(inputs[outputIndex])
      }

      // Run command
      switch (commandStr) {
        case 'cd':
          switch (commandArg) {
            case '/':
              currentDir = dirs[0]
              break
            case '..':
              if (typeof currentDir.parent === 'undefined') {
                throw new Error(`Unable to cd up one level from ${getFullPath(currentDir)}`)
              }
              currentDir = currentDir.parent
              break
            default:
              const newDir = currentDir.children.find((child) => child.name === commandArg)
              if (typeof newDir === 'undefined') {
                throw new Error(`No dir named ${commandArg} in ${getFullPath(currentDir)}`)
              }
              currentDir = newDir
              break
          }
          break
        case 'ls':
          for (const commandOutput of commandOutputs) {
            const [fileInfo, fileName] = commandOutput.split(' ')
            if (fileInfo === 'dir') {
              if (!currentDir.children.find((child) => child.name === fileName)) {
                currentDir.children.push({
                  name: fileName,
                  parent: currentDir,
                  children: [],
                  files: [],
                })
              }
            } else {
              if (!currentDir.files.find((file) => file.name === fileName)) {
                currentDir.files.push({ name: fileName, size: Number(fileInfo) })
              }
            }
          }
          break
        default:
          throw new Error(`Unknown commnand ${commandStr}`)
      }
    }
  }

  // Calculate sizes
  const result: Record<string, number> = {}
  recursiveSizeCalc(dirs[0], result)

  return result
}

function recursiveSizeCalc(dir: Dir, cacheObj: Record<string, number>): number {
  const filesSize = dir.files.reduce((sum, next) => sum + next.size, 0)
  if (dir.children.length === 0) {
    cacheObj[getFullPath(dir)] = filesSize
    return filesSize
  } else {
    const res =
      filesSize + dir.children.reduce((sum, next) => sum + recursiveSizeCalc(next, cacheObj), 0)
    cacheObj[getFullPath(dir)] = res
    return res
  }
}

function isCommand(input: string) {
  return input[0] === '$'
}

function getFullPath(dir: Dir) {
  let path = dir.name + '/'
  let tempDir = dir
  while (typeof tempDir.parent !== 'undefined') {
    tempDir = tempDir.parent
    path = `${tempDir.name}/${path}`
  }

  return path
}

interface Dir {
  name: string
  files: { name: string; size: number }[]
  children: Dir[]
  parent: Dir | undefined
}
