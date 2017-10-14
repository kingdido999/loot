export function pluralize(singular, count) {
  return singular + (count > 1 ? 's' : '')
}