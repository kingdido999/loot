/**
 * Hyphenate a camelCase string.
 */
function hyphenate (string) {
  return string.replace(/([A-Z])/g, m => '-' + m.toLowerCase())
}