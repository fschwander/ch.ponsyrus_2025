import util from 'util'

const logMessage = (message, hasSpacing = true) => {
  console.log(hasSpacing ? `\n${message}\n` : message)
}

const logObject = (object) => {
  console.log(
    util.inspect(object, { showHidden: false, depth: null, colors: true }),
  )
}

export const printSuccess = (
  message,
  hasSpacing = true,
  hasBackground = true,
) => {
  if (hasBackground) {
    logMessage(`\x1b[97;42m ${message} 🚀 \x1b[0m`, hasSpacing)
  } else {
    logMessage(`\x1b[32m ✔︎ ${message}\x1b[0m`, hasSpacing)
  }
}

export const printError = (
  message,
  hasSpacing = true,
  hasBackground = true,
) => {
  if (hasBackground) {
    logMessage(`\x1b[97;41m ${message} \x1b[0m`, hasSpacing)
  } else {
    logMessage(`\x1b[31m X ${message}\x1b[0m`, hasSpacing)
  }
}

export const printHighlighted = (message, hasSpacing = true) => {
  logMessage(`\x1b[95m${message}\x1b[0m`, hasSpacing)
}

export const printUnobstrusive = (message, hasSpacing = true) => {
  logMessage(`\x1b[90m${message}\x1b[0m`, hasSpacing)
}

export const printObject = (object) => {
  logObject(object)
}
