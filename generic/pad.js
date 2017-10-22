function pad(string, width) {
  const len = Math.max(0, width - string.length)
  return string + Array(len + 1).join(' ')
}